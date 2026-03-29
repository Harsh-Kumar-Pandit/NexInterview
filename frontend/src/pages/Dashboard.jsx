import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/react";

import {
  useActiveSessions,
  useCreateSession,
  useMyRecentSessions,
} from "../hooks/useSessions";

import CreateSessionModal from "../components/CreateSessionModal/CreateSessionModal";
import WelcomeSection from "../components/Welcome/Welcome";
import StatsCards from "../components/StatsCards/StatsCards";
import RecentSessions from "../components/RecentSessions/RecentSessions";
import ActiveSessions from "../components/ActiveSession/ActiveSessions";
import NavbarProblemPage from "../components/Navbar/NavbarProblemPage";
import QuickStats from "../components/QuickStats/QuickStats";
import FilterBar from "../components/FilterBar/FilterBar";

const S = {
  page: {
    minHeight: "100vh",
    background: "#060814",
    color: "#f1f5f9",
    fontFamily: "'Outfit', sans-serif",
  },
  ambient: {
    pointerEvents: "none",
    position: "fixed",
    inset: 0,
    zIndex: 0,
    background:
      "radial-gradient(circle at top left, rgba(99,102,241,0.10) 0%, transparent 28%), radial-gradient(circle at top right, rgba(14,165,233,0.08) 0%, transparent 24%)",
  },
  pageBody: {
    position: "relative",
    zIndex: 10,
    paddingTop: "64px",
  },
  inner: {
    maxWidth: "1220px",
    margin: "0 auto",
    padding: "20px 24px 64px",
  },
  overviewBlock: {
    marginTop: "22px",
  },
  overviewLabel: {
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#475569",
    margin: 0,
  },
  overviewTitle: {
    marginTop: "8px",
    marginBottom: 0,
    fontFamily: "'Sora', sans-serif",
    fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
    fontWeight: 600,
    letterSpacing: "-0.04em",
    color: "#f1f5f9",
    lineHeight: 1.25,
  },
  grid: {
    marginTop: "28px",
    display: "grid",
    gridTemplateColumns: "280px minmax(0, 1fr)",
    gap: "20px",
    alignItems: "start",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
  },
  recentWrap: {
    marginTop: "20px",
  },
  emptyState: {
    textAlign: "center",
    padding: "60px 24px",
    marginTop: "28px",
    background: "#0d111d",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
  },
  emptyIcon: {
    fontSize: "32px",
    marginBottom: "12px",
  },
  emptyTitle: {
    color: "#f1f5f9",
    fontWeight: 700,
    fontSize: "18px",
    margin: 0,
  },
  emptyText: {
    color: "#64748b",
    marginTop: "8px",
    marginBottom: 0,
    fontSize: "14px",
  },
  emptyButton: {
    marginTop: "24px",
    padding: "11px 28px",
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    border: "1px solid rgba(129,140,248,0.35)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
    letterSpacing: "0.01em",
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } =
    useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } =
    useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;
    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const filteredSessions = activeSessions
    .filter(
      (s) =>
        filter === "All" ||
        s.difficulty?.toLowerCase() === filter.toLowerCase()
    )
    .filter((s) =>
      s.problem?.toLowerCase().includes(search.toLowerCase())
    );

  const isUserInSession = (session) => {
    if (!user?.id) return false;
    return (
      session.host?.clerkId === user.id ||
      session.participant?.clerkId === user.id
    );
  };

  const showEmptyDashboard =
    activeSessions.length === 0 &&
    recentSessions.length === 0 &&
    !loadingActiveSessions &&
    !loadingRecentSessions;

  return (
    <main style={S.page}>
      <NavbarProblemPage />
      <div style={S.ambient} />

      <div style={S.pageBody}>
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

        <div style={S.inner}>
          <QuickStats recentSessionsCount={recentSessions.length} />

          <div style={S.overviewBlock}>
            <p style={S.overviewLabel}>Dashboard Overview</p>
            <h2 style={S.overviewTitle}>
              Practice rooms, progress, and past sessions for{" "}
              <span style={{ color: "#a5b4fc" }}>{user?.firstName || "you"}</span>.
            </h2>
          </div>

          {showEmptyDashboard ? (
            <div style={S.emptyState}>
              <p style={S.emptyIcon}>{"\u{1F3AF}"}</p>
              <h3 style={S.emptyTitle}>No sessions yet</h3>
              <p style={S.emptyText}>
                Create your first interview session to get started.
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                style={S.emptyButton}
              >
                {"\u26A1"} Create First Session
              </button>
            </div>
          ) : (
            <>
              <div style={S.grid}>
                <StatsCards
                  activeSessionsCount={activeSessions.length}
                  recentSessionsCount={recentSessions.length}
                />

                <div style={S.rightColumn}>
                  <FilterBar
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                  />
                  <ActiveSessions
                    sessions={filteredSessions}
                    isLoading={loadingActiveSessions}
                    isUserInSession={isUserInSession}
                  />
                </div>
              </div>

              <div style={S.recentWrap}>
                <RecentSessions
                  sessions={recentSessions}
                  isLoading={loadingRecentSessions}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </main>
  );
};

export default Dashboard;

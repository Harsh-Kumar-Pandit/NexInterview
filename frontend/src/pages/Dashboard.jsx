import { useEffect, useState } from "react";
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

import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [isNarrow, setIsNarrow] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 600 : false
  );

  const createSessionMutation = useCreateSession();

  const {
    data: activeSessionsData,
    isLoading: loadingActiveSessions,
    isError: isActiveSessionsError,
  } = useActiveSessions();

  const {
    data: recentSessionsData,
    isLoading: loadingRecentSessions,
    isError: isRecentSessionsError,
  } = useMyRecentSessions();

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth <= 600);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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

  const activeSessions  = activeSessionsData?.sessions  ?? undefined;
  const recentSessions  = recentSessionsData?.sessions  ?? undefined;

  const filteredSessions = activeSessions
    ? activeSessions
        .filter((s) => filter === "All" || s.difficulty?.toLowerCase() === filter.toLowerCase())
        .filter((s) => s.problem?.toLowerCase().includes(search.toLowerCase()))
    : undefined;

  const isUserInSession = (session) => {
    if (!user?.id) return false;
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  const activeSessionsCount  = activeSessions?.length  ?? 0;
  const recentSessionsCount  = recentSessions?.length  ?? 0;
  const hasActiveLoaded      = Array.isArray(activeSessions);
  const hasRecentLoaded      = Array.isArray(recentSessions);

  const showEmpty =
    hasActiveLoaded &&
    hasRecentLoaded &&
    activeSessions.length === 0 &&
    recentSessions.length === 0 &&
    !loadingActiveSessions &&
    !loadingRecentSessions &&
    !isActiveSessionsError &&
    !isRecentSessionsError &&
    !!activeSessionsData &&
    !!recentSessionsData;

  return (
    <main className="dash-page">
      <NavbarProblemPage />
      <div className="dash-ambient" />

      <div className="dash-body">
        <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

        <div className="dash-inner">
          <QuickStats recentSessionsCount={recentSessionsCount} />

          {/* Overview heading */}
          <div className="dash-overview">
            <p className="dash-overview-label">Dashboard Overview</p>
            <h2 className="dash-overview-title">
              Practice rooms, progress, and past sessions for{" "}
              <span className="dash-name">{user?.firstName || "you"}</span>.
            </h2>
          </div>

          {showEmpty ? (
            /* ── Empty state ── */
            <div className="dash-empty">
              <p className="dash-empty-icon">🎯</p>
              <h3 className="dash-empty-title">No sessions yet</h3>
              <p className="dash-empty-text">
                Create your first interview session to get started.
              </p>
              <button
                className="dash-empty-btn"
                onClick={() => setShowCreateModal(true)}
              >
                ⚡ Create First Session
              </button>
            </div>
          ) : (
            <>
              {/* ── Main grid ── */}
              <div className={`dash-grid${isNarrow ? " dash-grid--narrow" : ""}`}>
                <StatsCards
                  activeSessionsCount={activeSessionsCount}
                  recentSessionsCount={recentSessionsCount}
                />

                <div className="dash-right">
                  <FilterBar
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                  />
                  <ActiveSessions
                    sessions={filteredSessions ?? []}
                    isLoading={loadingActiveSessions}
                    isUserInSession={isUserInSession}
                  />
                </div>
              </div>

              {/* ── Recent sessions ── */}
              <div className="dash-recent-wrap">
                <RecentSessions
                  sessions={recentSessions ?? []}
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
import { ArrowRightIcon, Clock3Icon, Code2Icon, CrownIcon, LoaderIcon, RadioIcon, SparklesIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router";
import "./ActiveSessions.css";

function formatRelativeTime(dateString) {
  const diff = Math.max(1, Math.floor((Date.now() - new Date(dateString).getTime()) / 60000));
  if (diff < 60) return `${diff} min ago`;
  const h = Math.floor(diff / 60);
  if (h < 24) return `${h} hr ago`;
  const d = Math.floor(h / 24);
  return `${d} day${d > 1 ? "s" : ""} ago`;
}

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <section className="as">
      <div className="as-hdr">
        <div className="as-hdr-left">
          <div className="as-hdr-icon"><RadioIcon size={18} /></div>
          <div>
            <h2 className="as-hdr-title">Live Sessions</h2>
            <p className="as-hdr-sub">Join rooms that are active right now</p>
          </div>
        </div>
        <span className="as-count">{sessions.length} live</span>
      </div>

      <div className="as-list">
        {isLoading ? (
          <div className="as-loading"><LoaderIcon size={28} className="animate-spin" style={{ color: "#818cf8" }} /></div>
        ) : sessions.length === 0 ? (
          <div className="as-empty">
            <div className="as-empty-icon"><SparklesIcon size={20} /></div>
            <p className="as-empty-title">No live sessions right now</p>
            <p className="as-empty-sub">Create one and start the next interview round.</p>
          </div>
        ) : (
          sessions.map((session) => {
            const diff = session.difficulty?.toLowerCase() || "easy";
            const isFull = session.participant && !isUserInSession?.(session);
            const isMine = isUserInSession?.(session);
            return (
              <article key={session._id} className="as-item">
                <div className="as-item-left">
                  <div className="as-code-icon">
                    <Code2Icon size={14} />
                    <span className="as-live-dot" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p className="as-item-name">{session.problem}</p>
                    <div className="as-item-meta">
                      <span className={`as-pill as-pill--${diff}`}>{session.difficulty}</span>
                      {isMine && <span className="as-pill as-pill--yours">Your session</span>}
                      <span className="as-meta-item"><CrownIcon size={11} />{session.host?.name || session.host?.email || "Unknown"}</span>
                      <span className="as-meta-item"><UsersIcon size={11} />{session.participant ? "2/2" : "1/2"}</span>
                      <span className="as-meta-item"><Clock3Icon size={11} />{formatRelativeTime(session.createdAt)}</span>
                      {isFull
                        ? <span className="as-pill as-pill--full">Full</span>
                        : <span className="as-pill as-pill--open">Open</span>}
                    </div>
                  </div>
                </div>
                {isFull ? (
                  <button className="as-join-btn as-join-btn--disabled" disabled>Full</button>
                ) : (
                  <Link to={`/session/${session._id}`} className="as-join-btn">
                    {isMine ? "Rejoin" : "Join"} <ArrowRightIcon size={12} />
                  </Link>
                )}
              </article>
            );
          })
        )}
      </div>
    </section>
  );
}

export default ActiveSessions;
import { CalendarDaysIcon, HistoryIcon, UserRoundIcon } from "lucide-react";
import "./RecentSessions.css";

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function RecentSessions({ sessions, isLoading }) {
  return (
    <section className="rs">
      <div className="rs-hdr">
        <div className="rs-hdr-icon"><HistoryIcon size={18} /></div>
        <div>
          <h2 className="rs-hdr-title">Your Past Sessions</h2>
          <p className="rs-hdr-sub">Review completed interview practice rounds</p>
        </div>
      </div>

      {isLoading ? (
        <div className="rs-grid">
          {[...Array(6)].map((_, i) => <div key={i} className="rs-skeleton" />)}
        </div>
      ) : sessions.length === 0 ? (
        <div className="rs-empty">
          <p className="rs-empty-title">No completed sessions yet</p>
          <p className="rs-empty-sub">Finish an interview session and it will show up here.</p>
        </div>
      ) : (
        <div className="rs-grid">
          {sessions.map((session) => {
            const diff = session.difficulty?.toLowerCase() || "easy";
            return (
              <article key={session._id} className="rs-card">
                <div className="rs-card-top">
                  <div className="rs-card-icon"><UserRoundIcon size={15} /></div>
                  <span className={`rs-pill rs-pill--${diff}`}>{session.difficulty}</span>
                </div>
                <p className="rs-card-name">{session.problem}</p>
                <div className="rs-card-meta">
                  <div className="rs-card-meta-row"><CalendarDaysIcon size={12} />{formatDate(session.createdAt)}</div>
                  <div className="rs-card-meta-row"><HistoryIcon size={12} />Completed session</div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default RecentSessions;
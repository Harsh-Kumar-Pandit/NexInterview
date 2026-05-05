import { ActivityIcon, HistoryIcon, TrophyIcon } from "lucide-react";
import "./StatsCards.css";

const stats = [
  { key: "active",    label: "Active Sessions",     cls: "sc-card--green",  Icon: ActivityIcon },
  { key: "recent",    label: "Past Sessions",        cls: "sc-card--cyan",   Icon: HistoryIcon },
  { key: "readiness", label: "Interview Readiness",  cls: "sc-card--violet", Icon: TrophyIcon },
];

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  const values = {
    active:    activeSessionsCount,
    recent:    recentSessionsCount,
    readiness: `${Math.min(98, 68 + recentSessionsCount * 4)}%`,
  };
  return (
    <div className="sc-grid">
      {stats.map(({ key, label, cls, Icon }) => (
        <article key={key} className={`sc-card ${cls}`}>
          <div className="sc-head">
            <div>
              <p className="sc-label">{label}</p>
              <p className="sc-val">{values[key]}</p>
            </div>
            <div className="sc-icon"><Icon size={20} /></div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default StatsCards;
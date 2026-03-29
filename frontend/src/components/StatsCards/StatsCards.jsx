import { ActivityIcon, HistoryIcon, TrophyIcon } from "lucide-react";

const statItems = [
  {
    key: "active",
    label: "Active Sessions",
    accent: "from-emerald-500/16 to-emerald-400/4",
    border: "border-emerald-400/14",
    icon: ActivityIcon,
  },
  {
    key: "recent",
    label: "Past Sessions",
    accent: "from-cyan-500/16 to-cyan-400/4",
    border: "border-cyan-400/14",
    icon: HistoryIcon,
  },
  {
    key: "readiness",
    label: "Interview Readiness",
    accent: "from-violet-500/16 to-violet-400/4",
    border: "border-violet-400/14",
    icon: TrophyIcon,
  },
];

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  const values = {
    active: activeSessionsCount,
    recent: recentSessionsCount,
    readiness: `${Math.min(98, 68 + recentSessionsCount * 4)}%`,
  };

  return (
    <div className="grid gap-5">
      {statItems.map(({ key, label, accent, border, icon: Icon }) => (
        <article
          key={key}
          className={`border ${border} bg-gradient-to-br ${accent} p-6 shadow-[0_16px_36px_rgba(0,0,0,0.22)]`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {label}
              </p>
              <p className="mt-4 font-['Sora',sans-serif] text-5xl font-bold tracking-[-0.05em] text-white">
                {values[key]}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center border border-white/8 bg-white/6 text-slate-200">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default StatsCards;

import { CalendarDaysIcon, HistoryIcon, UserRoundIcon } from "lucide-react";

const difficultyClasses = {
  easy: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/15",
  medium: "bg-amber-500/15 text-amber-300 border border-amber-400/15",
  hard: "bg-rose-500/15 text-rose-300 border border-rose-400/15",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function RecentSessions({ sessions, isLoading }) {
  return (
    <section
      className="border border-white/10 bg-[#0d111d] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.24)]"
      style={{ marginTop: "20px" }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center border border-cyan-400/10 bg-cyan-400/10 text-cyan-300">
          <HistoryIcon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-['Sora',sans-serif] text-lg font-semibold text-white">Your Past Sessions</h2>
          <p className="text-sm text-slate-400">Review completed interview practice rounds</p>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="h-48 animate-pulse border border-white/8 bg-white/5" />
          ))}
        </div>
      ) : sessions.length === 0 ? (
        <div className="border border-dashed border-white/10 bg-white/[0.03] px-5 py-14 text-center">
          <p className="font-medium text-slate-200">No completed sessions yet</p>
          <p className="mt-2 text-sm text-slate-400">Finish an interview session and it will show up here.</p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sessions.map((session) => (
            <article
              key={session._id}
              className="border border-white/8 bg-white/[0.03] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.16)]"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center border border-emerald-400/10 bg-emerald-400/10 text-emerald-300">
                  <UserRoundIcon className="h-5 w-5" />
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase ${difficultyClasses[session.difficulty] || difficultyClasses.easy}`}>
                  {session.difficulty}
                </span>
              </div>

              <h3 className="font-semibold text-white">{session.problem}</h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <span>{formatDate(session.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HistoryIcon className="h-4 w-4" />
                  <span>Completed session</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentSessions;

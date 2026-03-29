import {
  ArrowRightIcon,
  Clock3Icon,
  Code2Icon,
  CrownIcon,
  LoaderIcon,
  RadioIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import { Link } from "react-router";

const difficultyClasses = {
  easy: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/15",
  medium: "bg-amber-500/15 text-amber-300 border border-amber-400/15",
  hard: "bg-rose-500/15 text-rose-300 border border-rose-400/15",
};

function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const diffMinutes = Math.max(1, Math.floor((Date.now() - date.getTime()) / 60000));
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  const hours = Math.floor(diffMinutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <section className="border border-white/10 bg-[#0d111d] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.24)]">
      <style>{`
        .as-list::-webkit-scrollbar { width: 3px; }
        .as-list::-webkit-scrollbar-track { background: transparent; }
        .as-list::-webkit-scrollbar-thumb { background: rgba(129,140,248,0.4); border-radius: 99px; }
        .as-list::-webkit-scrollbar-thumb:hover { background: rgba(129,140,248,0.7); }
      `}</style>

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center border border-emerald-400/10 bg-emerald-400/10 text-emerald-300">
            <RadioIcon className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-['Sora',sans-serif] text-lg font-semibold text-white">
              Live Sessions
            </h2>
            <p className="text-sm text-slate-400">Join rooms that are active right now</p>
          </div>
        </div>
        <span className="rounded-full border border-emerald-400/15 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {sessions.length} live
        </span>
      </div>

      {/* ── Scrollable list ── */}
      <div
        className="as-list"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          /* show 3 full cards then scroll — each card ~88px + 10px gap */
          maxHeight: "282px",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(129,140,248,0.4) transparent",
          paddingRight: "6px",   /* breathing room so scrollbar doesn't overlap card */
        }}
      >
        {isLoading ? (
          <div className="flex min-h-52 items-center justify-center border border-white/8 bg-white/[0.03]">
            <LoaderIcon className="h-8 w-8 animate-spin text-indigo-300" />
          </div>
        ) : sessions.length === 0 ? (
          <div className="border border-dashed border-white/10 bg-white/[0.03] px-5 py-14 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-emerald-400/10 bg-emerald-400/10 text-emerald-300">
              <SparklesIcon className="h-7 w-7" />
            </div>
            <p className="font-medium text-slate-200">No live sessions right now</p>
            <p className="mt-2 text-sm text-slate-400">
              Create one and start the next interview round.
            </p>
          </div>
        ) : (
          sessions.map((session) => (
            <article
              key={session._id}
              className="flex flex-col gap-3 border border-white/8 bg-white/[0.03] px-5 py-4 md:flex-row md:items-center md:justify-between"
              style={{ flexShrink: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-emerald-400/10 bg-emerald-400/10 text-emerald-300">
                  <Code2Icon className="h-4 w-4" />
                  <div className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-white">{session.problem}</h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase ${
                        difficultyClasses[session.difficulty] || difficultyClasses.easy
                      }`}
                    >
                      {session.difficulty}
                    </span>
                    {isUserInSession?.(session) && (
                      <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase text-cyan-300">
                        Your session
                      </span>
                    )}
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CrownIcon className="h-3.5 w-3.5" />
                      {session.host?.name || session.host?.email || "Unknown host"}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <UsersIcon className="h-3.5 w-3.5" />
                      {session.participant ? "2/2" : "1/2"}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3Icon className="h-3.5 w-3.5" />
                      {formatRelativeTime(session.createdAt)}
                    </span>
                    {session.participant && !isUserInSession?.(session) ? (
                      <span className="rounded-full border border-rose-400/15 bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase text-rose-300">
                        Full
                      </span>
                    ) : (
                      <span className="rounded-full border border-emerald-400/15 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase text-emerald-300">
                        Open
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end md:shrink-0">
                {session.participant && !isUserInSession?.(session) ? (
                  <button
                    type="button"
                    disabled
                    className="border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500"
                  >
                    Full
                  </button>
                ) : (
                  <Link
                    to={`/session/${session._id}`}
                    className="inline-flex items-center gap-2 border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-300 transition hover:border-emerald-300/30 hover:bg-emerald-400/15"
                  >
                    {isUserInSession?.(session) ? "Rejoin" : "Join"}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default ActiveSessions;

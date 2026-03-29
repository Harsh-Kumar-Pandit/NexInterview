import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-lg">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl overflow-hidden border border-white/10 bg-[#0B1220] shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(6,182,212,0.10),transparent_22%)]" />

        <div className="relative flex flex-col gap-8 p-6 sm:p-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Session setup
            </p>
            <h3 className="font-['Sora',sans-serif] text-3xl font-extrabold tracking-[-0.03em] bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent sm:text-4xl">
              Create New Session
            </h3>
            <p className="max-w-xl text-sm leading-6 text-slate-300/65">
              Pick a coding problem and start a focused one-on-one interview room.
            </p>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between text-sm font-medium text-slate-300">
              <span>Select Problem</span>
              <span className="text-red-400">*</span>
            </label>

            <select
              className="w-full rounded-2xl border border-white/10 bg-[#0A0F1F] px-4 py-3.5 text-slate-200 outline-none transition-all duration-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
              value={roomConfig.problem}
              onChange={(e) => {
                const selectedProblem = problems.find(
                  (p) => p.title === e.target.value
                );
                setRoomConfig({
                  difficulty: selectedProblem.difficulty,
                  problem: e.target.value,
                });
              }}
            >
              <option value="" disabled>
                Choose a coding problem...
              </option>

              {problems.map((problem) => (
                <option key={problem.id} value={problem.title}>
                  {problem.title} ({problem.difficulty})
                </option>
              ))}
            </select>
          </div>

          {roomConfig.problem && (
            <div className="border border-emerald-400/20 bg-emerald-500/5 p-5 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                  <Code2Icon className="size-5" />
                </div>

                <div className="space-y-2 text-sm text-slate-300">
                  <p className="font-semibold text-emerald-400">Room Summary</p>
                  <p>
                    Problem:{" "}
                    <span className="font-medium text-white">{roomConfig.problem}</span>
                  </p>
                  <p>
                    Max Participants:{" "}
                    <span className="font-medium text-white">2 (1-on-1 session)</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col-reverse gap-3 border-t border-white/8 pt-2 sm:flex-row sm:justify-end">
            <button
              className="border border-white/10 bg-white/5 px-5 py-3 text-slate-300 transition-all hover:bg-white/10"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 px-5 py-3 font-medium text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-50"
              onClick={onCreateRoom}
              disabled={isCreating || !roomConfig.problem}
            >
              {isCreating ? (
                <LoaderIcon className="size-5 animate-spin" />
              ) : (
                <PlusIcon className="size-5" />
              )}
              {isCreating ? "Creating..." : "Create Session"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSessionModal;

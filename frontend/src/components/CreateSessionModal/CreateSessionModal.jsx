import { Code2Icon, LoaderIcon, PlusIcon } from "lucide-react";
import { PROBLEMS } from "../../data/problems";
import "./CreateSessionModal.css";

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

  const selectedProblem = problems.find((p) => p.title === roomConfig.problem);
  const diffCls = selectedProblem?.difficulty?.toLowerCase() || "easy";

  return (
    <div className="csm-overlay">
      <div className="csm-backdrop" onClick={onClose} />

      <div className="csm-modal">
        <div className="csm-glow" />

        <div className="csm-inner">

          {/* ── Header ── */}
          <p className="csm-tag">Session Setup</p>
          <h3 className="csm-title">Create New Session</h3>
          <p className="csm-subtitle">
            Pick a coding problem and start a focused one-on-one interview room.
          </p>

          <div className="csm-divider" />

          {/* ── Problem Select ── */}
          <div className="csm-field-label">
            <span>Select Problem</span>
            <span className="csm-field-req">* required</span>
          </div>

          <div className="csm-select-wrap">
            <select
              className="csm-select"
              value={roomConfig.problem}
              onChange={(e) => {
                const selected = problems.find((p) => p.title === e.target.value);
                setRoomConfig({
                  difficulty: selected?.difficulty || "",
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

          {/* ── Room Summary ── */}
          {roomConfig.problem && (
            <div className="csm-summary">
              <div className="csm-summary-icon">
                <Code2Icon size={20} />
              </div>
              <div>
                <p className="csm-summary-label">Room Summary</p>
                <div className="csm-summary-row">
                  Problem: <strong>{roomConfig.problem}</strong>
                </div>
                <div className="csm-summary-row">
                  Difficulty:{" "}
                  <span className={`csm-badge csm-badge--${diffCls}`}>
                    {selectedProblem?.difficulty}
                  </span>
                </div>
                <div className="csm-summary-row">
                  Participants: <strong>2 (1-on-1 session)</strong>
                </div>
              </div>
            </div>
          )}

          {/* ── Footer ── */}
          <div className="csm-footer">
            <button className="csm-btn-cancel" onClick={onClose}>
              Cancel
            </button>

            <button
              className="csm-btn-create"
              onClick={onCreateRoom}
              disabled={isCreating || !roomConfig.problem}
            >
              {isCreating ? (
                <LoaderIcon size={15} className="animate-spin" />
              ) : (
                <PlusIcon size={15} />
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
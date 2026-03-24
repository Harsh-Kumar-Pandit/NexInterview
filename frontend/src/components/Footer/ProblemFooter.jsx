import { PROBLEMS } from "../../data/problems";

export default function ProblemFooter() {
  const problems = Object.values(PROBLEMS);

  const total = problems.length;

  const easy = problems.filter(p => p.difficulty.toLowerCase() === "easy").length;
  const medium = problems.filter(p => p.difficulty.toLowerCase() === "medium").length;
  const hard = problems.filter(p => p.difficulty.toLowerCase() === "hard").length;

  return (
    <div
      style={{
        marginTop: "3rem",
        padding: "1.5rem 2rem",
        borderRadius: "14px",
        background: "rgba(13,15,30,0.6)",
        border: "1px solid rgba(99,102,241,0.12)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "0.9rem",
          color: "rgba(180,190,230,0.7)",
        }}
      >
        Total Problems:{" "}
        <span style={{ color: "#e0e7ff", fontWeight: 600 }}>
          {total}
        </span>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        
        <span style={badgeStyle("#34d399")}>
          Easy: {easy}
        </span>

        <span style={badgeStyle("#fbbf24")}>
          Medium: {medium}
        </span>

        <span style={badgeStyle("#f87171")}>
          Hard: {hard}
        </span>

      </div>
    </div>
  );
}

function badgeStyle(color) {
  return {
    fontSize: "0.75rem",
    padding: "6px 12px",
    borderRadius: "999px",
    border: `1px solid ${color}33`,
    background: `${color}10`,
    color: color,
    fontWeight: 600,
    fontFamily: "'Sora', sans-serif",
  };
}
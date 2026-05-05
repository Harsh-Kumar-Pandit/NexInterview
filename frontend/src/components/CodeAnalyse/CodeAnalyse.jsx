import { X, ShieldCheck, Bug, Zap, AlertTriangle, Trophy } from "lucide-react";

const CIRCUMFERENCE = 150.8;

const scoreInfo = (score) => {
  if (score >= 7)
    return {
      color: "#639922",
      bg: "#EAF3DE",
      verdict: "Strong solution",
      hint: "Great work! Minor improvements possible.",
    };
  if (score >= 4)
    return {
      color: "#EF9F27",
      bg: "#FAEEDA",
      verdict: "Getting there",
      hint: "Correct approach but needs refinement.",
    };
  return {
    color: "#E24B4A",
    bg: "#FCEBEB",
    verdict: "Needs work",
    hint: "Focus on correctness first, then optimize.",
  };
};

const parseBullets = (val) => {
  if (!val) return [];
  if (Array.isArray(val)) return val.filter(Boolean);

  const noneKeywords = [
    "none found",
    "no bugs",
    "no issues",
    "no edge",
    "none",
  ];
  if (noneKeywords.some((k) => val.toLowerCase().trim().startsWith(k)))
    return [];

  return val
    .split("\n")
    .map((line) => line.replace(/^[\s\-•*\d.]+/, "").trim())
    .filter((line) => line.length > 2);
};
const Badge = ({ label, color, bg }) => (
  <span
    style={{
      fontSize: 10,
      padding: "2px 8px",
      borderRadius: 20,
      fontWeight: 500,
      background: bg,
      color,
      flexShrink: 0,
    }}
  >
    {label}
  </span>
);

const Card = ({
  icon,
  title,
  badgeLabel,
  badgeColor,
  badgeBg,
  accentColor,
  accentBg,
  children,
}) => (
  <div
    style={{
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.08)",
      overflow: "hidden",
      background: "rgba(255,255,255,0.03)",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: accentBg + "18",
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: accentBg,
          color: accentColor,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span
        style={{ fontSize: 13, fontWeight: 500, color: "#e4e4e7", flex: 1 }}
      >
        {title}
      </span>
      {badgeLabel && (
        <Badge label={badgeLabel} color={badgeColor} bg={badgeBg} />
      )}
    </div>
    <div style={{ padding: "12px 14px" }}>{children}</div>
  </div>
);

const BulletList = ({ text }) => {
  const items = parseBullets(text);
  if (!items.length)
    return <p style={{ fontSize: 13, color: "#71717a" }}>None found.</p>;
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            fontSize: 13,
            color: "#a1a1aa",
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#52525b",
              marginTop: 7,
              flexShrink: 0,
              display: "block",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

const CodeAnalyse = ({ review, onClose }) => {
  if (!review) return null;

  const data = typeof review === "string" ? { summary: review } : review;
  const score = Math.min(10, Math.max(0, parseInt(data.score) || 0));
  const { color, bg, verdict, hint } = scoreInfo(score);
  const offset = CIRCUMFERENCE - (score / 10) * CIRCUMFERENCE;

  const timeVal =
    data.timeComplexity?.split("—")[0]?.trim() || data.timeComplexity || "—";
  const timeDesc = data.timeComplexity?.split("—")[1]?.trim() || "";
  const spaceVal =
    data.spaceComplexity?.split("—")[0]?.trim() || data.spaceComplexity || "—";
  const spaceDesc = data.spaceComplexity?.split("—")[1]?.trim() || "";

  const bugCount = parseBullets(data.bugs).length;
  const edgeCount = parseBullets(data.edgeCases).length;

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        background: "#0d0f1e",
        color: "#e4e4e7",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "16px 20px 14px",
          background: "#0d0f1e",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div>
          <p style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5" }}>
            AI Code Review
          </p>
          <p style={{ fontSize: 12, color: "#71717a", marginTop: 3 }}>
            Smart analysis of your solution
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#71717a",
            fontSize: 14,
          }}
        >
          <X size={14} />
        </button>
      </div>

      <div
        style={{
          padding: "16px 16px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* ── Score Block ── */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.07)",
            padding: "16px 18px",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              position: "relative",
              flexShrink: 0,
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="4"
              />
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
                style={{ transition: "stroke-dashoffset 0.8s ease" }}
              />
            </svg>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 600,
                color,
              }}
            >
              {score}/10
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 18, fontWeight: 600, color }}>{verdict}</p>
            <p
              style={{
                fontSize: 12,
                color: "#71717a",
                marginTop: 5,
                lineHeight: 1.55,
              }}
            >
              {hint}
            </p>
          </div>
          <Trophy
            size={22}
            color={color}
            style={{ flexShrink: 0, opacity: 0.7 }}
          />
        </div>

        {/* ── Complexity Row ── */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}
        >
          {[
            ["Time", timeVal, timeDesc],
            ["Space", spaceVal, spaceDesc],
          ].map(([label, val, desc]) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "12px 14px",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "#52525b",
                  marginBottom: 5,
                }}
              >
                {label} complexity
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "monospace",
                  color: "#f4f4f5",
                }}
              >
                {val}
              </p>
              {desc && (
                <p
                  style={{
                    fontSize: 11,
                    color: "#71717a",
                    marginTop: 4,
                    lineHeight: 1.4,
                  }}
                >
                  {desc}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── Correctness ── */}
        {(() => {
          const text = data.correctness?.toLowerCase() || "";
          const isCorrect =
            text.includes("correctly") ||
            (text.includes("correct") &&
              !text.includes("incorrect") &&
              !text.includes("not correct") &&
              !text.includes("does not"));

          return (
            <Card
              icon={<ShieldCheck size={14} />}
              title="Correctness"
              badgeLabel={isCorrect ? "Correct" : "Incorrect"}
              badgeColor={isCorrect ? "#3B6D11" : "#A32D2D"}
              badgeBg={isCorrect ? "#EAF3DE" : "#FCEBEB"}
              accentColor="#3B6D11"
              accentBg="#EAF3DE"
            >
              <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7 }}>
                {data.correctness || "No data."}
              </p>
            </Card>
          );
        })()}
        {/* ── Bugs ── */}
        <Card
          icon={<Bug size={14} />}
          title="Bugs found"
          badgeLabel={
            bugCount > 0
              ? `${bugCount} issue${bugCount > 1 ? "s" : ""}`
              : "Clean"
          }
          badgeColor={bugCount > 0 ? "#A32D2D" : "#3B6D11"}
          badgeBg={bugCount > 0 ? "#FCEBEB" : "#EAF3DE"}
          accentColor="#A32D2D"
          accentBg="#FCEBEB"
        >
          <BulletList text={data.bugs} />
        </Card>

        {/* ── Better Approach ── */}
        <Card
          icon={<Zap size={14} />}
          title="Better approach"
          accentColor="#185FA5"
          accentBg="#E6F1FB"
        >
          <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7 }}>
            {data.betterApproach || "Your approach looks optimal."}
          </p>
        </Card>

        {/* ── Edge Cases ── */}
        <Card
          icon={<AlertTriangle size={14} />}
          title="Edge cases missed"
          badgeLabel={
            edgeCount > 0
              ? `${edgeCount} case${edgeCount > 1 ? "s" : ""}`
              : null
          }
          badgeColor="#854F0B"
          badgeBg="#FAEEDA"
          accentColor="#854F0B"
          accentBg="#FAEEDA"
        >
          <BulletList text={data.edgeCases} />
        </Card>

        {/* ── Summary (if exists) ── */}
        {data.summary && (
          <Card
            icon={<Zap size={14} />}
            title="Summary"
            accentColor="#534AB7"
            accentBg="#EEEDFE"
          >
            <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.7 }}>
              {data.summary}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CodeAnalyse;

function QuickStats({ recentSessionsCount }) {
  const items = [
    {
      label: "Interview Readiness",
      value: "68%",
      accent: "#818cf8",
      showBar: true,
    },
    {
      label: "Avg. Session Score",
      value: "74%",
      accent: "#8b5cf6",
    },
    {
      label: "Problems Solved",
      value: String(recentSessionsCount),
      accent: "#06b6d4",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "14px",
        marginTop: "20px",
      }}
    >
      {items.map((item) => (
        <article
          key={item.label}
          style={{
            background: "#0d111d",
            border: "1px solid rgba(255,255,255,0.10)",
            borderLeft: `3px solid ${item.accent}`,
            padding: "16px 18px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#64748b",
            }}
          >
            {item.label}
          </p>
          <p
            style={{
              margin: "10px 0 0",
              fontFamily: "'Sora', sans-serif",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
            }}
          >
            {item.value}
          </p>
          {item.showBar ? (
            <div
              style={{
                marginTop: "10px",
                width: "100%",
                height: "4px",
                background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "68%",
                  height: "100%",
                  background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
                }}
              />
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export default QuickStats;

import "./QuickStats.css";

function QuickStats({ recentSessionsCount }) {
  const items = [
    { label: "Interview Readiness", value: "68%", cls: "qs-card--indigo", bar: true, barWidth: "68%" },
    { label: "Avg. Session Score",  value: "74%", cls: "qs-card--violet" },
    { label: "Problems Solved",     value: String(recentSessionsCount), cls: "qs-card--cyan" },
  ];
  return (
    <div className="qs-grid">
      {items.map((item) => (
        <article key={item.label} className={`qs-card ${item.cls}`}>
          <p className="qs-label">{item.label}</p>
          <p className="qs-val">{item.value}</p>
          {item.bar && (
            <div className="qs-bar-track">
              <div className="qs-bar-fill" style={{ width: item.barWidth }} />
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

export default QuickStats;
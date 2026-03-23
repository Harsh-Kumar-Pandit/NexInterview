export default function FeatureCard({ icon, title, desc, featured = false, index = 0 }) {
  return (
    <div
      className={`feat-card${featured ? " feat-card--featured" : ""}`}
      style={{ animationDelay: `${0.05 + index * 0.07}s` }}
    >
      <div className="feat-icon-wrap">{icon}</div>
      <h3 className="feat-card-title">{title}</h3>
      <p className="feat-card-desc">{desc}</p>
      <div className="feat-card-line" />
    </div>
  );
}
import { Link } from "react-router";
import "./ProblemCard.css";

function CodeIcon({ solved }) {
  if (solved) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9.5L7 13.5L15 5" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <polyline points="5,6 2,9 5,12" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
      <polyline points="13,6 16,9 13,12" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="11" y1="3" x2="7" y2="15" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function ProblemCard({
  id,
  title,
  difficulty = "medium",
  tags = [],
  description,
  solved = false,
}) {
  const descText =
    typeof description === "string"
      ? description
      : description?.text ?? "";

  return (
    <Link
      to={`/problems/${id}`}
      className={`pcard${solved ? " pcard--solved" : ""}`}
    >
      <div className="pcard-left">

        <div className="pcard-icon">
          <CodeIcon solved={solved} />
        </div>

        <div className="pcard-body">

          <div className="pcard-title-row">
            <span className="pcard-title">{title}</span>
            <span className={`pcard-badge pcard-badge--${difficulty.toLowerCase()}`}>
              {difficulty}
            </span>
          </div>

          {tags.length > 0 && (
            <div className="pcard-tags">
              {tags.map((tag) => (
                <span key={tag} className="pcard-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {descText && (
            <p className="pcard-desc">{descText}</p>
          )}

        </div>
      </div>

      <div className="pcard-right">
        {solved && (
          <div className="pcard-solved-icon">✓</div>
        )}
        <div className="pcard-solve">
          {solved ? "Solved" : "Solve"}
          <span className="pcard-solve-arrow">›</span>
        </div>
      </div>
    </Link>
  );
}
import { Link, useLocation } from "react-router";
import { UserButton } from "@clerk/react";
import "./Navbarproblempage.css";

function ProblemNavLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="url(#pnHex)" opacity="0.15" />
      <polygon points="18,2 32,10 32,26 18,34 4,26 4,10" fill="none" stroke="url(#pnHex)" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" fill="url(#pnHex)" />
      <circle cx="10" cy="13" r="2" fill="#818cf8" opacity="0.9" />
      <circle cx="26" cy="13" r="2" fill="#a78bfa" opacity="0.9" />
      <circle cx="10" cy="23" r="2" fill="#a78bfa" opacity="0.7" />
      <circle cx="26" cy="23" r="2" fill="#818cf8" opacity="0.7" />
      <line x1="18" y1="18" x2="10" y2="13" stroke="#818cf8" strokeWidth="1" opacity="0.6" />
      <line x1="18" y1="18" x2="26" y2="13" stroke="#a78bfa" strokeWidth="1" opacity="0.6" />
      <line x1="18" y1="18" x2="10" y2="23" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
      <line x1="18" y1="18" x2="26" y2="23" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="13" x2="10" y2="23" stroke="#818cf8" strokeWidth="0.75" opacity="0.3" />
      <line x1="26" y1="13" x2="26" y2="23" stroke="#a78bfa" strokeWidth="0.75" opacity="0.3" />
      <defs>
        <linearGradient id="pnHex" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function NavbarProblemPage() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="pnav">

      <Link to="/" className="pnav-logo">
        <div className="pnav-logo-icon">
          <div className="pnav-logo-glow" />
          <ProblemNavLogo />
        </div>
        <div className="pnav-logo-text">
          <span className="pnav-logo-name">NexInterview</span>
          <span className="pnav-logo-tagline">AI-Powered</span>
        </div>
      </Link>

      <div className="pnav-links">
        <Link
          to="/practice"
          className={`pnav-link ${isActive("/practice") ? "pnav-link--active" : ""}`}
        >
          Practice
        </Link>
        <Link
          to="/sessions"
          className={`pnav-link ${isActive("/sessions") ? "pnav-link--active" : ""}`}
        >
          Sessions
        </Link>
        <Link
          to="/pricing"
          className={`pnav-link ${isActive("/pricing") ? "pnav-link--active" : ""}`}
        >
          Pricing
        </Link>
      </div>

      <div className="pnav-actions">
        <span className="pnav-badge">Beta</span>

        <Link
          to="/problems"
          className={`pnav-btn--problems ${isActive("/problems") ? "pnav-btn--active" : ""}`}
        >
          ▦ Problems
        </Link>

        <Link
          to="/dashboard"
          className={`pnav-btn--dashboard ${isActive("/dashboard") ? "pnav-btn--dashboard-active" : ""}`}
        >
          ⊞ Dashboard
        </Link>

        <div className="pnav-sep" />

        <div className="pnav-user">
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  boxShadow: "0 0 0 1.5px rgba(129,140,248,0.35)",
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
}
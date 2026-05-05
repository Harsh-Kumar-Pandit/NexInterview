import { Link } from "react-router";
import { SignInButton, UserButton, useUser } from "@clerk/react";
import "./style.css";
import NexLogo from "./Nexlogo";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <>
      <nav className="nexnav nexnav-root">
        {/* ── Logo ── */}
        <Link to="/" className="nexnav-logo">
          <div className="nexnav-logo-icon">
            <div className="nexnav-logo-glow" />
            <NexLogo />
          </div>
          <div className="nexnav-wordmark">
            <span className="nexnav-name">NexInterview</span>
            <span className="nexnav-tagline">AI-Powered Interview Platform</span>{" "}
          </div>
        </Link>

        {/* ── Centre links ── */}
        <div className="nexnav-links">
          <Link to="/problems" className="nexnav-link">
            Practice
          </Link>
          <Link to="/dashboard" className="nexnav-link">
            Sessions
          </Link>
          <Link to="/demo" className="nexnav-link">
            Demo
          </Link>
        </div>

        {/* ── Right actions ── */}
        <div className="nexnav-actions">
          <span className="nexnav-badge">Beta</span>
          <div className="nexnav-sep" />

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="nexnav-cta">
                Get Started
                <span className="nexnav-cta-arrow">→</span>
              </button>
            </SignInButton>
          ) : (
            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    boxShadow: "0 0 0 1.5px rgba(129,140,248,0.35)",
                  },
                },
              }}
            />
          )}
        </div>
      </nav>
    </>
  );
}

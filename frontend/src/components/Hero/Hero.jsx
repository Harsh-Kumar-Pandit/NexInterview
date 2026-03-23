import { useUser, useClerk } from "@clerk/react";
import { Link, useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import HeroIllustration from "./HeroIllustration";
import "./style.css";

export default function Hero() {
  const { isSignedIn } = useUser();
const { openSignIn } = useClerk();
const navigate = useNavigate();

const handleStartInterview = () => {
  if (isSignedIn) {
    navigate("/interview");
  } else {
    openSignIn(); // opens Clerk modal
  }
};

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg-mesh" />
        <div className="hero-grid" />
        <div className="hero-orb hero-orb1" />
        <div className="hero-orb hero-orb2" />

        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span className="hero-badge-text">
                Real-Time Interview Platform
              </span>
            </div>

            <h1 className="hero-heading">
              <span className="hero-heading-plain">Ace Every</span>{" "}
              <span className="hero-heading-grad">Technical</span>
              <br />
              <span className="hero-heading-plain">Interview,</span>{" "}
              <span className="hero-heading-grad">Together.</span>
            </h1>

            <p className="hero-sub">
              <p className="hero-sub">
                Simulate real interview experiences with live video calls,
                shared coding, and multi-language support — so you're ready when
                it actually matters.
              </p>
            </p>

            <div className="hero-pills">
              <span className="hero-pill">
                <span className="hero-pill-check">✓</span> Live Video and
                Chat{" "}
              </span>
              <span className="hero-pill">
                <span className="hero-pill-check">✓</span> Code Editor
              </span>
              <span className="hero-pill">
                <span className="hero-pill-check">✓</span> Multi-Language
              </span>
              <span className="hero-pill">
                <span className="hero-pill-check">✓</span> System Design
              </span>
            </div>

            <div className="hero-ctas">
              <button className="hero-btn-primary" onClick={handleStartInterview}>
  Start Interview Now →
</button>
              <Link to="/demo" className="hero-btn-secondary">
                <span className="btn-play-icon">▶</span>
                Watch Demo
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">10K+</div>
                <div className="hero-stat-label">Active Users</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">50K+</div>
                <div className="hero-stat-label">Sessions</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">99.9%</div>
                <div className="hero-stat-label">Uptime</div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <HeroIllustration />
          </div>
        </div>
      </section>
    </>
  );
}

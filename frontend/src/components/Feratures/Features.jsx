import "./style.css";
import FeatureCard from "./FeatureCard";

// ── SVG Icons ──────────────────────────────────────────────
function VideoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="ig1" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="18" height="14" rx="3" stroke="url(#ig1)" strokeWidth="1.5" fill="none"/>
      <path d="M20 10.5 L26 7 L26 19 L20 15.5Z" stroke="url(#ig1)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="ig2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <polyline points="8,9 3,14 8,19" stroke="url(#ig2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="20,9 25,14 20,19" stroke="url(#ig2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="17" y1="5" x2="11" y2="23" stroke="url(#ig2)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CollabIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="ig3" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <circle cx="9" cy="9" r="5" stroke="url(#ig3)" strokeWidth="1.5" fill="none"/>
      <circle cx="21" cy="9" r="5" stroke="url(#ig3)" strokeWidth="1.5" fill="none"/>
      <path d="M2 25c0-4 3-6 7-6h10c4 0 7 2 7 6" stroke="url(#ig3)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="ig4" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="11" stroke="url(#ig4)" strokeWidth="1.5" fill="none"/>
      <circle cx="14" cy="14" r="3" fill="url(#ig4)"/>
      <line x1="14" y1="3" x2="14" y2="7" stroke="url(#ig4)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="21" x2="14" y2="25" stroke="url(#ig4)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3" y1="14" x2="7" y2="14" stroke="url(#ig4)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="21" y1="14" x2="25" y2="14" stroke="url(#ig4)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ScreenIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="ig5" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <rect x="3" y="4" width="22" height="15" rx="2" stroke="url(#ig5)" strokeWidth="1.5" fill="none"/>
      <line x1="3" y1="10" x2="25" y2="10" stroke="url(#ig5)" strokeWidth="1" opacity="0.4"/>
      <rect x="8" y="13" width="4" height="2" rx="1" fill="url(#ig5)" opacity="0.7"/>
      <rect x="14" y="13" width="6" height="2" rx="1" fill="url(#ig5)" opacity="0.5"/>
      <path d="M9 22 L14 26 L19 22" stroke="url(#ig5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function ScoreIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <defs>
        <linearGradient id="ig6" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path d="M14 3 L17 10 L25 10 L19 15 L21 23 L14 18 L7 23 L9 15 L3 10 L11 10 Z"
        stroke="url(#ig6)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

// ── Feature data ───────────────────────────────────────────
const FEATURES = [
  {
    icon: <VideoIcon />,
    title: "HD Video Call",
    desc: "Crystal clear video and audio for seamless communication during interviews — no lag, no drops.",
  },
  {
    icon: <CodeIcon />,
    title: "Live Code Editor",
    desc: "Collaborate in real-time with syntax highlighting, auto-complete, and multi-language support.",

  },
  {
    icon: <CollabIcon />,
    title: "Easy Collaboration",
    desc: "Share your screen, discuss solutions, and learn from each other in real-time with zero friction.",
  },
  {
    icon: <AIIcon />,
    title: "AI Feedback",
    desc: "Get instant, personalized feedback on your answers, code quality, and communication style.",
  },
  {
    icon: <ScreenIcon />,
    title: "Screen Sharing",
    desc: "Share your full screen or a specific window to walk through your thought process live.",
  },
  {
    icon: <ScoreIcon />,
    title: "Smart Scoring",
    desc: "Detailed performance reports covering problem-solving, speed, communication, and code quality.",
  },
];

// ── Component ──────────────────────────────────────────────
export default function Features() {
  return (
    <section className="feat-section">
      <div className="feat-bg-grid" />
      <div className="feat-bg-glow" />

      <div className="feat-inner">

        {/* Header */}
        <div className="feat-header">
          <div className="feat-eyebrow">
            <span className="feat-eyebrow-dot" />
            Platform Features
          </div>
          <h2 className="feat-title">
            Everything You Need to{" "}
            <span className="feat-title-grad">Succeed</span>
          </h2>
          <p className="feat-subtitle">
            Powerful features designed to make your coding interviews
            seamless and productive.
          </p>
        </div>

        {/* Cards grid */}
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="feat-bottom">
          <span className="feat-bottom-text">Ready to get started?</span>
          <a href="/interview" className="feat-bottom-link">
            Try a free session →
          </a>
        </div>

      </div>
    </section>
  );
}
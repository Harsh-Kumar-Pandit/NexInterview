import { useUser } from "@clerk/react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    // NO margin here — Dashboard controls the offset
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        // matches the page bg exactly — no contrast box, blends in
        background: "linear-gradient(180deg, #0a0c1a 0%, #060814 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
      }}
    >
      {/* subtle left-side purple glow — very low opacity to not fight the bg */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 45% 120% at 0% 50%, rgba(99,102,241,0.07), transparent)," +
            "radial-gradient(ellipse 25% 80% at 100% 20%, rgba(139,92,246,0.05), transparent)",
        }}
      />
      {/* very faint shimmer line — barely visible on dark bg */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.25), rgba(139,92,246,0.2), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "22px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Left — icon + text */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0 }}>
          <div
            style={{
              width: "46px", height: "46px", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(99,102,241,0.10)",
              border: "1px solid rgba(99,102,241,0.18)",
              color: "#818cf8",
            }}
          >
            <SparklesIcon style={{ width: 20, height: 20 }} />
          </div>

          <div style={{ minWidth: 0 }}>
            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.35rem, 3vw, 1.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                margin: 0,
                lineHeight: 1.2,
                // gradient stays but uses colours closer to the indigo/violet theme
                background: "linear-gradient(90deg, #a5b4fc, #c4b5fd, #67e8f9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Welcome back, {user?.firstName || "there"}!
            </h1>
            <p
              style={{
                marginTop: "4px",
                fontSize: "13px",
                color: "rgba(148,163,184,0.65)",
                fontWeight: 400,
              }}
            >
              Ready to level up your coding skills?
            </p>
          </div>
        </div>

        {/* Right — CTA */}
        <button
          onClick={onCreateSession}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            border: "1px solid rgba(99,102,241,0.35)",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "13.5px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 6px 22px rgba(99,102,241,0.25)",
            transition: "all 0.2s",
            flexShrink: 0,
            letterSpacing: "0.01em",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 32px rgba(99,102,241,0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 22px rgba(99,102,241,0.25)";
          }}
        >
          <ZapIcon style={{ width: 14, height: 14 }} />
          <span>Create Session</span>
          <ArrowRightIcon style={{ width: 14, height: 14 }} />
        </button>
      </div>
    </section>
  );
}

export default WelcomeSection;
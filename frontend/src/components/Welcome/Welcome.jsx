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
        background: "linear-gradient(135deg, #0d1020 0%, #0f1230 100%)",
        borderTop: "1px solid rgba(129,140,248,0.15)",
        borderBottom: "1px solid rgba(129,140,248,0.10)",
        borderLeft: "none",
        borderRight: "none",
      }}
    >
      {/* left glow */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 100% at 0% 50%, rgba(129,140,248,0.13), transparent), radial-gradient(ellipse 30% 80% at 100% 20%, rgba(167,139,250,0.08), transparent)",
        }}
      />
      {/* top shimmer line */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.5), rgba(167,139,250,0.4), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "24px 24px",
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
              width: "48px", height: "48px", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(129,140,248,0.12)",
              border: "1px solid rgba(129,140,248,0.2)",
              color: "#a5b4fc",
            }}
          >
            <SparklesIcon style={{ width: 22, height: 22 }} />
          </div>

          <div style={{ minWidth: 0 }}>
            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                margin: 0,
                lineHeight: 1.2,
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
                marginTop: "5px",
                fontSize: "13.5px",
                color: "rgba(203,213,225,0.6)",
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
            padding: "11px 22px",
            border: "1px solid rgba(129,140,248,0.35)",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
            color: "#fff",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 8px 28px rgba(99,102,241,0.3)",
            transition: "all 0.2s",
            flexShrink: 0,
            letterSpacing: "0.01em",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <ZapIcon style={{ width: 15, height: 15 }} />
          <span>Create Session</span>
          <ArrowRightIcon style={{ width: 15, height: 15 }} />
        </button>
      </div>
    </section>
  );
}

export default WelcomeSection;
import "./style.css"
export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 2rem 1.5rem",
        borderTop: "1px solid rgba(99,102,241,0.12)",
        background:
          "linear-gradient(180deg, rgba(10,12,25,0.4), rgba(10,12,25,0.9))",
      }}
    >
      <div
        style={{
          height: "1px",
          width: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
          marginBottom: "2rem",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              background:
                "linear-gradient(135deg, #e0e7ff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NexInterview
          </h2>

          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(180,190,230,0.6)",
              maxWidth: "260px",
              lineHeight: 1.6,
            }}
          >
            Practice real interview problems and improve your problem-solving
            skills with a clean, focused experience.
          </p>
        </div>

        <div>
          <h4
            style={{
              fontSize: "0.8rem",
              color: "rgba(200,210,255,0.8)",
              marginBottom: "0.6rem",
            }}
          >
            Platform
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <a href="/practice" className="footer-link">Practice</a>
            <a href="/sessions" className="footer-link">Sessions</a>
            <a href="/pricing" className="footer-link">Pricing</a>
          </div>
        </div>

        <div>
          <h4
            style={{
              fontSize: "0.8rem",
              color: "rgba(200,210,255,0.8)",
              marginBottom: "0.6rem",
            }}
          >
            Account
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <a href="/sign-in" className="footer-link">Login</a>
            <a href="/sign-up" className="footer-link">Get Started</a>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.8rem",
          textAlign: "center",
          fontSize: "0.75rem",
          color: "rgba(160,170,220,0.5)",
          letterSpacing: "0.03em",
        }}
      >
        © {new Date().getFullYear()} NexInterview — Built for real interview practice.
      </div>
    </footer>
  );
}
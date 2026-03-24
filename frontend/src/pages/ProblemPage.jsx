import React from "react";
import NavbarProblemPage from "../components/Navbar/NavbarProblemPage";
import { PROBLEMS } from "../data/problems";
import ProblemCard from "../components/ProblemCard/ProblemCard";
import ProblemFooter from "../components/Footer/ProblemFooter";

const ProblemPage = () => {
  const problems = Object.values(PROBLEMS);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080A14",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      <NavbarProblemPage />

     <div
  style={{
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "110px 2rem 4rem",
  }}
>
  <div
    style={{
      marginBottom: "3rem",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: "-40px",
        left: "-60px",
        width: "220px",
        height: "220px",
        background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)",
        filter: "blur(60px)",
        zIndex: 0,
      }}
    />

    <div style={{ position: "relative", zIndex: 1 }}>
      <h1
        style={{
          fontSize: "2.6rem",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          background:
            "linear-gradient(135deg, #e0e7ff 10%, #a78bfa 60%, #6366f1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
  
          fontFamily: "'Sora', sans-serif",
        }}
      >
        Practice Problems
      </h1>

      <p
        style={{
          fontSize: "1rem",
          color: "rgba(180, 190, 230, 0.65)",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.8,
          maxWidth: "520px",
        }}
      >Practice real interview problems and improve your problem-solving speed.
      </p>
    </div>
  </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {problems.map((p, i) => (
            <ProblemCard
              key={p.id}
              index={i + 1}
              id={p.id}
              title={p.title}
              difficulty={p.difficulty}
              tags={p.tags}
              description={p.description}
              solved={p.solved}
            />
          ))}
        </div>
      </div>
      <ProblemFooter/>
    </div>
  );
};

export default ProblemPage;

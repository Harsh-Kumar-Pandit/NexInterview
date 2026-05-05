import { useState } from "react";
import { Link } from "react-router";
import "./DemoPage.css";
import NavbarProblemPage from "../components/Navbar/NavbarProblemPage";

const FAQS = [
  {
    q: "Is NexInterview free to use?",
    a: "Yes! You can start with our free tier which includes 3 mock interviews per month, access to the live code editor, and basic AI feedback. Upgrade to Pro for unlimited sessions.",
  },
  {
    q: "What programming languages are supported?",
    a: "We support Python, JavaScript, TypeScript, Java, C++, Go, Rust, and more. The code editor has syntax highlighting and auto-complete for all major languages.",
  },
  {
    q: "How does the AI feedback work?",
    a: "After every session, our AI analyses your code quality, problem-solving approach, communication clarity, and time management — giving you a detailed score breakdown with actionable tips.",
  },
  {
    q: "Can I practice with a real person too?",
    a: "Absolutely. You can invite a friend or peer via a shareable link. Both of you get a shared code editor, HD video call, and chat — just like a real FAANG-style interview.",
  },
  {
    q: "Is my interview data private?",
    a: "Yes. All sessions are encrypted end-to-end. We never share your interview recordings or code with third parties. You own your data and can delete it anytime.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Create Account",
    desc: "Sign up in seconds with Google or email. No credit card required.",
  },
  {
    num: "02",
    title: "Pick Your Track",
    desc: "Choose DSA, System Design, Behavioural, or a full mock round.",
  },
  {
    num: "03",
    title: "Start Interview",
    desc: "Jump into a live session with AI or invite a peer to join.",
  },
  {
    num: "04",
    title: "Get Feedback",
    desc: "Receive a detailed score card and improvement roadmap instantly.",
  },
];

const HIGHLIGHTS = [
  {
    emoji: "🎥",
    title: "HD Video + Audio",
    desc: "Crystal-clear video calls with noise cancellation so you can focus entirely on the problem.",
  },
  {
    emoji: "💻",
    title: "Collaborative Code Editor",
    desc: "Real-time shared editor with syntax highlighting, multi-language support, and run-code capability.",
  },
  {
    emoji: "🤖",
    title: "AI Interviewer",
    desc: "Our AI asks follow-up questions, hints when you're stuck, and grades your solution live.",
  },
  {
    emoji: "📊",
    title: "Performance Analytics",
    desc: "Track your progress over time — see where you improve and what needs more practice.",
  },
  {
    emoji: "🗂️",
    title: "System Design Whiteboard",
    desc: "Draw architecture diagrams in real-time with an infinite canvas shared between participants.",
  },
  {
    emoji: "🔒",
    title: "End-to-End Encrypted",
    desc: "All sessions are private and encrypted. Your code and recordings stay yours forever.",
  },
];



const STATS = [
  { num: "10K+",  label: "Active Users" },
  { num: "50K+",  label: "Sessions Run" },
  { num: "99.9%", label: "Uptime" },
  { num: "4.9★",  label: "Avg Rating" },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`demo-faq-item${open ? " open" : ""}`}>
      <button className="demo-faq-q" onClick={() => setOpen(!open)}>
        {q}
        <span className="demo-faq-chevron">▼</span>
      </button>
      <div className="demo-faq-a">{a}</div>
    </div>
  );
}

export default function DemoPage() {
  return (
    <div className="demo-page">
      <div className="demo-bg-grid" />
      <NavbarProblemPage/>

      <div className="demo-hero">
        <div className="demo-hero-eyebrow">
          <span className="demo-hero-dot"/>
        </div>
        <h1 className="demo-hero-title">
          See <span className="demo-hero-grad">NexInterview</span>
          <br />in Action
        </h1>
        <p className="demo-hero-sub">
          Watch how NexInterview simulates real technical interviews — with AI,
          live coding, video, and instant feedback — all in one place.
        </p>
      </div>

      <div className="demo-video-wrap">
        <div className="demo-video-glow" />
        <div className="demo-video-shell">

          <div className="demo-video-chrome">
            <div className="demo-chrome-dot" />
            <div className="demo-chrome-dot" />
            <div className="demo-chrome-dot" />
            <div className="demo-chrome-bar">nexinterview.ai/demo</div>
          </div>

          <div className="demo-video-body">
                 
                <video controls poster="/Thumbnail.png">
                  <source src="/NexInterview.mp4" type="video/mp4" />
                </video>
           
          </div>
        </div>

      </div>

      <div className="demo-section">
        <div className="demo-section-label">How It Works</div>
        <div className="demo-steps">
          {STEPS.map((s) => (
            <div className="demo-step" key={s.num}>
              <div className="demo-step-num">{s.num}</div>
              <div className="demo-step-title">{s.title}</div>
              <div className="demo-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="demo-section-label">What You Get</div>
        <div className="demo-highlights">
          {HIGHLIGHTS.map((h) => (
            <div className="demo-highlight" key={h.title}>
              <div className="demo-highlight-icon">{h.emoji}</div>
              <div className="demo-highlight-body">
                <div className="demo-highlight-title">{h.title}</div>
                <div className="demo-highlight-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </div>

        

        <div className="demo-section-label">By the Numbers</div>
        <div className="demo-stats">
          {STATS.map((s) => (
            <div className="demo-stat" key={s.label}>
              <div className="demo-stat-num">{s.num}</div>
              <div className="demo-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="demo-section-label">Frequently Asked</div>
        <div className="demo-faq">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>

      <div className="demo-cta-strip">
        <div className="demo-cta-title">Ready to ace your next interview?</div>
        <p className="demo-cta-sub">
          Join 10,000+ developers already practicing on NexInterview.
        </p>
        <Link to="/" className="demo-cta-btn">
          Start for Free →
        </Link>
      </div>
    </div>
  );
}
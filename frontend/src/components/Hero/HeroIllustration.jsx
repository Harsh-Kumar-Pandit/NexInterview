import React from "react";

const HeroIllustration = () => {
  return (
    <div className="hero-illus-wrap">
      <svg
        viewBox="0 0 420 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-illus-svg"
      >
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0d0b1e" />
          </linearGradient>
          <linearGradient id="indigo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id="green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="softglow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background glow */}
        <ellipse cx="210" cy="190" rx="180" ry="160" fill="url(#ambientGlow)" />

        {/* ── Monitor / Screen ── */}
        <rect
          x="90"
          y="40"
          width="240"
          height="160"
          rx="12"
          fill="url(#screenGrad)"
          stroke="rgba(99,102,241,0.4)"
          strokeWidth="1.5"
        />
        {/* Screen header bar */}
        <rect
          x="90"
          y="40"
          width="240"
          height="24"
          rx="12"
          fill="rgba(99,102,241,0.12)"
        />
        <circle cx="108" cy="52" r="4" fill="rgba(239,68,68,0.6)" />
        <circle cx="122" cy="52" r="4" fill="rgba(251,191,36,0.6)" />
        <circle cx="136" cy="52" r="4" fill="rgba(52,211,153,0.6)" />
        {/* Tab bar */}
        <rect
          x="152"
          y="46"
          width="60"
          height="12"
          rx="4"
          fill="rgba(99,102,241,0.25)"
        />
        <text
          x="182"
          y="56"
          fontSize="7"
          fill="rgba(167,139,250,0.8)"
          textAnchor="middle"
          fontFamily="monospace"
        >
          interview.ai
        </text>

        {/* Code lines — animated */}
        <g className="code-lines">
          <rect
            x="104"
            y="76"
            width="80"
            height="5"
            rx="2"
            fill="url(#indigo)"
            opacity="0.9"
          />
          <rect
            x="104"
            y="87"
            width="130"
            height="5"
            rx="2"
            fill="rgba(129,140,248,0.5)"
          />
          <rect
            x="104"
            y="98"
            width="60"
            height="5"
            rx="2"
            fill="url(#green)"
            opacity="0.8"
          />
          <rect
            x="116"
            y="109"
            width="110"
            height="5"
            rx="2"
            fill="rgba(167,139,250,0.4)"
          />
          <rect
            x="116"
            y="120"
            width="90"
            height="5"
            rx="2"
            fill="rgba(99,102,241,0.5)"
          />
          <rect
            x="104"
            y="131"
            width="70"
            height="5"
            rx="2"
            fill="url(#green)"
            opacity="0.6"
          />
          <rect
            x="116"
            y="142"
            width="120"
            height="5"
            rx="2"
            fill="rgba(129,140,248,0.35)"
          />
          <rect
            x="104"
            y="153"
            width="55"
            height="5"
            rx="2"
            fill="url(#indigo)"
            opacity="0.7"
          />
          {/* Cursor blink */}
          <rect
            x="165"
            y="153"
            width="2"
            height="5"
            rx="1"
            fill="rgba(167,139,250,0.9)"
            className="cursor-blink"
          />
        </g>

        {/* ── AI avatar / bubble (right side of screen) ── */}
        <rect
          x="245"
          y="72"
          width="72"
          height="80"
          rx="8"
          fill="rgba(99,102,241,0.08)"
          stroke="rgba(99,102,241,0.25)"
          strokeWidth="1"
        />
        {/* AI face circle */}
        <circle
          cx="281"
          cy="100"
          r="20"
          fill="rgba(99,102,241,0.15)"
          stroke="url(#indigo)"
          strokeWidth="1.5"
        />
        {/* AI eyes */}
        <circle cx="274" cy="97" r="3" fill="url(#indigo)" />
        <circle cx="288" cy="97" r="3" fill="url(#indigo)" />
        {/* AI smile */}
        <path
          d="M274 106 Q281 112 288 106"
          stroke="url(#green)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Neural dots around AI */}
        <circle cx="261" cy="85" r="2" fill="rgba(99,102,241,0.5)" />
        <circle cx="301" cy="85" r="2" fill="rgba(167,139,250,0.5)" />
        <circle cx="261" cy="120" r="2" fill="rgba(167,139,250,0.4)" />
        <circle cx="301" cy="120" r="2" fill="rgba(99,102,241,0.4)" />
        <line
          x1="263"
          y1="85"
          x2="281"
          y2="100"
          stroke="rgba(99,102,241,0.2)"
          strokeWidth="0.75"
        />
        <line
          x1="299"
          y1="85"
          x2="281"
          y2="100"
          stroke="rgba(167,139,250,0.2)"
          strokeWidth="0.75"
        />
        {/* AI label */}
        <text
          x="281"
          y="142"
          fontSize="6.5"
          fill="rgba(129,140,248,0.7)"
          textAnchor="middle"
          fontFamily="monospace"
        >
          AI Interviewer
        </text>

        {/* ── Monitor stand ── */}
        <rect
          x="195"
          y="200"
          width="30"
          height="20"
          rx="2"
          fill="rgba(99,102,241,0.15)"
          stroke="rgba(99,102,241,0.2)"
          strokeWidth="1"
        />
        <rect
          x="165"
          y="218"
          width="90"
          height="6"
          rx="3"
          fill="rgba(99,102,241,0.12)"
          stroke="rgba(99,102,241,0.2)"
          strokeWidth="1"
        />

        {/* ── Floating tag chips ── */}
        {/* Python */}
        <g className="float-chip chip1">
          <rect
            x="30"
            y="60"
            width="60"
            height="24"
            rx="8"
            fill="rgba(99,102,241,0.15)"
            stroke="rgba(99,102,241,0.4)"
            strokeWidth="1"
          />
          <text
            x="60"
            y="76"
            fontSize="9"
            fill="url(#indigo)"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Python
          </text>
        </g>
        {/* JS */}
        <g className="float-chip chip2">
          <rect
            x="330"
            y="55"
            width="60"
            height="24"
            rx="8"
            fill="rgba(52,211,153,0.12)"
            stroke="rgba(52,211,153,0.35)"
            strokeWidth="1"
          />
          <text
            x="360"
            y="71"
            fontSize="9"
            fill="#34d399"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            JS / TS
          </text>
        </g>
        {/* System Design */}
        <g className="float-chip chip3">
          <rect
            x="22"
            y="155"
            width="78"
            height="24"
            rx="8"
            fill="rgba(167,139,250,0.12)"
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="1"
          />
          <text
            x="61"
            y="171"
            fontSize="8.5"
            fill="#a78bfa"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Sys Design
          </text>
        </g>
        {/* DSA */}
        <g className="float-chip chip4">
          <rect
            x="338"
            y="150"
            width="52"
            height="24"
            rx="8"
            fill="rgba(99,102,241,0.15)"
            stroke="rgba(99,102,241,0.4)"
            strokeWidth="1"
          />
          <text
            x="364"
            y="166"
            fontSize="9"
            fill="url(#indigo)"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="bold"
          >
            DSA
          </text>
        </g>

        {/* ── Score card bottom ── */}
        <g className="float-chip chip5">
          <rect
            x="110"
            y="240"
            width="200"
            height="50"
            rx="10"
            fill="rgba(8,10,20,0.8)"
            stroke="rgba(99,102,241,0.3)"
            strokeWidth="1"
          />
          {/* Score bar bg */}
          <rect
            x="122"
            y="260"
            width="176"
            height="6"
            rx="3"
            fill="rgba(99,102,241,0.12)"
          />
          {/* Score fill */}
          <rect
            x="122"
            y="260"
            width="132"
            height="6"
            rx="3"
            fill="url(#indigo)"
          />
          <text
            x="122"
            y="254"
            fontSize="7.5"
            fill="rgba(200,210,255,0.7)"
            fontFamily="monospace"
          >
            Interview Score
          </text>
          <text
            x="298"
            y="254"
            fontSize="7.5"
            fill="rgba(167,139,250,0.9)"
            textAnchor="end"
            fontFamily="monospace"
          >
            75%
          </text>
          <text
            x="122"
            y="278"
            fontSize="6.5"
            fill="rgba(99,102,241,0.6)"
            fontFamily="monospace"
          >
            Communication · Problem Solving · Speed
          </text>
        </g>

        {/* ── Pulsing connection dots ── */}
        <circle
          cx="210"
          cy="230"
          r="3"
          fill="rgba(99,102,241,0.5)"
          className="pulse-dot"
        />
        <circle
          cx="210"
          cy="230"
          r="8"
          fill="none"
          stroke="rgba(99,102,241,0.2)"
          strokeWidth="1"
          className="pulse-ring"
        />

        {/* ── Decorative orbital ring ── */}
        <ellipse
          cx="210"
          cy="150"
          rx="175"
          ry="130"
          fill="none"
          stroke="rgba(99,102,241,0.06)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <ellipse
          cx="210"
          cy="150"
          rx="145"
          ry="105"
          fill="none"
          stroke="rgba(167,139,250,0.04)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
      </svg>
    </div>
  );
};

export default HeroIllustration;

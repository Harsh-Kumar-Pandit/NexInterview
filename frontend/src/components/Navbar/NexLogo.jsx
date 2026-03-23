import React from 'react'

const NexLogo = () => {
  return (
    <div>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer hexagon */}
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        fill="url(#hexGrad)"
        opacity="0.15"
      />
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        fill="none"
        stroke="url(#hexGrad)"
        strokeWidth="1.5"
      />
      {/* Neural nodes */}
      <circle cx="18" cy="18" r="3" fill="url(#hexGrad)" />
      <circle cx="10" cy="13" r="2" fill="#818cf8" opacity="0.9" />
      <circle cx="26" cy="13" r="2" fill="#a78bfa" opacity="0.9" />
      <circle cx="10" cy="23" r="2" fill="#a78bfa" opacity="0.7" />
      <circle cx="26" cy="23" r="2" fill="#818cf8" opacity="0.7" />
      {/* Connection lines */}
      <line x1="18" y1="18" x2="10" y2="13" stroke="#818cf8" strokeWidth="1" opacity="0.6" />
      <line x1="18" y1="18" x2="26" y2="13" stroke="#a78bfa" strokeWidth="1" opacity="0.6" />
      <line x1="18" y1="18" x2="10" y2="23" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
      <line x1="18" y1="18" x2="26" y2="23" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="13" x2="10" y2="23" stroke="#818cf8" strokeWidth="0.75" opacity="0.3" />
      <line x1="26" y1="13" x2="26" y2="23" stroke="#a78bfa" strokeWidth="0.75" opacity="0.3" />
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>

    </div>
  )
}

export default NexLogo

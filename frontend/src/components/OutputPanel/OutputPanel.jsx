import React from 'react'

const OutputPanel = ({ output, isRunning }) => {
  return (
    <div className="flex h-full min-h-0 flex-col bg-[#181418] text-slate-100">
      <div className="border-b border-white/5 px-4 py-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
          Output Panel
        </h2>
      </div>

      <div className="min-h-0 flex-1 overflow-auto p-4">
  <pre
    className={`whitespace-pre-wrap break-words font-mono text-sm leading-6 ${
      isRunning
        ? "text-yellow-400"
        : output?.error
        ? "text-red-400"
        : output?.output
        ? "text-green-400"
        : "text-slate-200"
    }`}
  >
    {isRunning
      ? "Running code..."
      : output?.error || output?.output || "Run your code to see the output here."}
  </pre>
</div>
    </div>
  )
}

export default OutputPanel

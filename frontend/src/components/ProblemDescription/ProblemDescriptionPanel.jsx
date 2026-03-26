import React from 'react'

const getDifficultyConfig = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy':   return { pill: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30', dot: 'bg-emerald-400' }
    case 'medium': return { pill: 'text-amber-400 bg-amber-400/10 border-amber-400/30', dot: 'bg-amber-400' }
    case 'hard':   return { pill: 'text-rose-400 bg-rose-400/10 border-rose-400/30', dot: 'bg-rose-400' }
    default:       return { pill: 'text-slate-400 bg-slate-400/10 border-slate-400/30', dot: 'bg-slate-400' }
  }
}

const ProblemDescriptionPanel = ({ problem, currentProblemId, onProblemChange, allProblems }) => {
  const diff = getDifficultyConfig(problem.difficulty)

  return (
    <div
      className="h-full min-h-0 overflow-y-auto"
      style={{ background: '#0e1117', scrollbarWidth: 'thin', scrollbarColor: 'rgba(99,102,241,0.2) transparent' }}
    >
      {/* STICKY HEADER */}
      <div
        className="sticky top-0 z-10 px-6 pt-6 pb-5"
        style={{ background: '#0e1117', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-start justify-between gap-3 mb-1">
          <h1 className="text-xl font-bold text-white leading-snug tracking-tight">
            {problem.title}
          </h1>
          <span className={`shrink-0 mt-0.5 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold border ${diff.pill}`}>
            <span className={`w-1.5 h-1.5 ${diff.dot}`} />
            {problem.difficulty}
          </span>
        </div>

        <p className="text-xs text-slate-500 font-mono mb-4">{problem.category}</p>

        <select
          className="w-full px-3 py-2 text-sm text-slate-300 outline-none cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          value={currentProblemId}
          onChange={(e) => onProblemChange(e.target.value)}
        >
          {allProblems.map((p) => (
            <option key={p.id} value={p.id} style={{ background: '#1a1d27' }}>
              {p.title} — {p.difficulty}
            </option>
          ))}
        </select>
      </div>

      {/* BODY */}
      <div className="px-6 pt-7 pb-12 space-y-12">

        {/* DESCRIPTION */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-4 bg-indigo-500 opacity-80" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Description</h2>
          </div>
          <div
            className="px-5 py-7 space-y-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-slate-300 text-sm leading-7">{problem.description.text}</p>
            {problem.description.notes.map((note, idx) => (
              <p key={idx} className="text-slate-400 text-sm leading-7">{note}</p>
            ))}
          </div>
        </section>

        {/* EXAMPLES */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-4 bg-violet-500 opacity-80" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Examples</h2>
          </div>
          <div className="space-y-5">
            {problem.examples.map((example, idx) => (
              <div
                key={idx}
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Card header */}
                <div
                  className="px-4 py-2.5 flex items-center gap-2.5"
                  style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span
                    className="w-5 h-5 flex items-center justify-center text-[10px] font-bold text-indigo-300"
                    style={{ background: 'rgba(99,102,241,0.18)' }}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Example {idx + 1}</span>
                </div>

                {/* Card body */}
                <div
                  className="px-4 py-6 font-mono text-sm space-y-3"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-emerald-400 font-semibold w-16 shrink-0">Input:</span>
                    <span className="text-slate-200 leading-6">{example.input}</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-sky-400 font-semibold w-16 shrink-0">Output:</span>
                    <span className="text-slate-200 leading-6">{example.output}</span>
                  </div>
                  {example.explanation && (
                    <div
                      className="pt-3"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <p className="text-[12px] text-slate-500 font-sans leading-5">
                        <span className="text-slate-400 font-semibold">Explanation: </span>
                        {example.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONSTRAINTS */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-4 bg-rose-500 opacity-80" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">Constraints</h2>
          </div>
          <div
            className="px-5 py-6 space-y-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {problem.constraints.map((constraint, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="mt-2.5 w-1 h-1 shrink-0 bg-indigo-400 opacity-70" />
                <code className="text-sm text-slate-300 font-mono leading-7">{constraint}</code>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default ProblemDescriptionPanel
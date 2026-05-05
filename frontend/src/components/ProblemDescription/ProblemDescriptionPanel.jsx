import React from 'react'
import './ProblemDescriptionPanel.css'

const getDifficultyClass = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy':   return 'easy'
    case 'medium': return 'medium'
    case 'hard':   return 'hard'
    default:       return 'easy'
  }
}

const ProblemDescriptionPanel = ({ problem, currentProblemId, onProblemChange, allProblems }) => {
  const diffCls = getDifficultyClass(problem.difficulty)
  const categories = problem.category?.split('•').map(c => c.trim()).filter(Boolean) || []

  return (
    <div className="pdp-root">

      {/* ── STICKY HEADER ── */}
      <div className="pdp-header">

        {/* Title + Pill */}
        <div className="pdp-title-row">
          <h1 className="pdp-title">{problem.title}</h1>
          <span className={`pdp-pill pdp-pill--${diffCls}`}>
            <span className="pdp-pill-dot" />
            {problem.difficulty}
          </span>
        </div>

        {/* Category */}
        <p className="pdp-category">
          {categories.map((cat, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="pdp-category-dot" />}
              {cat}
            </React.Fragment>
          ))}
          {categories.length === 0 && problem.category}
        </p>

        {/* Problem Selector */}
        <div className="pdp-select-wrap">
          <select
            className="pdp-select"
            value={currentProblemId}
            onChange={(e) => onProblemChange(e.target.value)}
          >
            {allProblems.map((p) => (
              <option key={p.id} value={p.id} style={{ background: '#0d1120' }}>
                {p.title} — {p.difficulty}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="pdp-body">

        {/* DESCRIPTION */}
        <section>
          <div className="pdp-section-header">
            <span className="pdp-section-bar pdp-section-bar--indigo" />
            <span className="pdp-section-label">Description</span>
          </div>
          <div className="pdp-description-block">
            <p className="pdp-description-text">{problem.description.text}</p>
            {problem.description.notes?.map((note, idx) => (
              <p key={idx} className="pdp-description-note">{note}</p>
            ))}
          </div>
        </section>

        {/* EXAMPLES */}
        <section>
          <div className="pdp-section-header">
            <span className="pdp-section-bar pdp-section-bar--violet" />
            <span className="pdp-section-label">Examples</span>
          </div>
          <div className="pdp-examples-list">
            {problem.examples.map((example, idx) => (
              <div key={idx} className="pdp-example-card">

                {/* Card header */}
                <div className="pdp-example-header">
                  <span className="pdp-example-num">{idx + 1}</span>
                  <span className="pdp-example-title">Example {idx + 1}</span>
                </div>

                {/* Card body */}
                <div className="pdp-example-body">
                  <div className="pdp-example-row">
                    <span className="pdp-example-label pdp-example-label--input">Input</span>
                    <span className="pdp-example-value">{example.input}</span>
                  </div>
                  <div className="pdp-example-row">
                    <span className="pdp-example-label pdp-example-label--output">Output</span>
                    <span className="pdp-example-value">{example.output}</span>
                  </div>
                  {example.explanation && (
                    <div className="pdp-example-explanation">
                      <p>
                        <span>Explanation: </span>
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
          <div className="pdp-section-header">
            <span className="pdp-section-bar pdp-section-bar--rose" />
            <span className="pdp-section-label">Constraints</span>
          </div>
          <div className="pdp-constraints-block">
            {problem.constraints.map((constraint, idx) => (
              <div key={idx} className="pdp-constraint-row">
                <span className="pdp-constraint-bullet" />
                <code className="pdp-constraint-text">{constraint}</code>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default ProblemDescriptionPanel
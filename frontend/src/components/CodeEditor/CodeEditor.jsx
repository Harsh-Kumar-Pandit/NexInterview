import React from "react";
import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../../data/problems";

const CodeEditor = ({
  code,
  selectedLanguage,
  isRunning,
  onCodeChange,
  onLanguageChange,
  onRunCode,
  isAnalyzing,
  onAnalyzeCode,
  showAnalyzeButton,
}) => {
  return (
    <div className="h-full bg-[#0d0f1e] flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-500/10">
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-5"
          />

          <select
            className="bg-[#15172b] text-sm px-2 py-1 rounded border border-white/10"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        {showAnalyzeButton && (
<button
  onClick={onAnalyzeCode}
  disabled={isAnalyzing}
  style={{
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 14px",
    borderRadius: 8,
    border: "1px solid rgba(139,92,246,0.4)",
    background: isAnalyzing 
      ? "rgba(139,92,246,0.1)" 
      : "rgba(139,92,246,0.15)",
    color: isAnalyzing ? "#7c6faa" : "#a78bfa",
    fontSize: 13,
    fontWeight: 500,
    cursor: isAnalyzing ? "not-allowed" : "pointer",
    transition: "all 0.2s",
    whiteSpace: "nowrap",
    opacity: isAnalyzing ? 0.7 : 1,
  }}
  onMouseEnter={e => {
    if (!isAnalyzing) {
      e.currentTarget.style.background = "rgba(139,92,246,0.25)";
      e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
    }
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = "rgba(139,92,246,0.15)";
    e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
  }}
>
  {isAnalyzing ? (
    <>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
        style={{ animation: "spin 1s linear infinite" }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" 
          strokeWidth="3" strokeDasharray="40" strokeDashoffset="10"/>
      </svg>
      Analyzing...
    </>
  ) : (
    <>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
      AI Analyze
    </>
  )}

  <style>{`
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}</style>
</button>)}

        <button
          className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded text-sm disabled:opacity-50"
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run
            </>
          )}
        </button>
      </div>

      {/* EDITOR */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={(value) => onCodeChange(value || "")}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
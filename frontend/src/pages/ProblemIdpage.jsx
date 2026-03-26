import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import NavbarProblemPage from "../components/Navbar/NavbarProblemPage";
import ProblemDescriptionPanel from "../components/ProblemDescription/ProblemDescriptionPanel";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import OutputPanel from "../components/OutputPanel/OutputPanel";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import toast from "react-hot-toast";
import { executeCode } from "../lib/piston";
import confetti from "canvas-confetti";

const ProblemIdpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelecetedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    PROBLEMS[currentProblemId].starterCode.javascript,
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handelProblemChange = (problemId) => {
    if (!problemId || !PROBLEMS[problemId]) return;
    navigate(`/problems/${problemId}`);
  };

  const handleLanguageChange =(e) => {
    const newLamg = e.target.value;
    setSelecetedLanguage(newLamg)
    setCode(currentProblem.starterCode[newLamg])
    setOutput(null)
  }

  const handleRunCode = async () => {
  setIsRunning(true);
  setOutput(null);

  try {
    const result = await executeCode(selectedLanguage, code);

    setOutput(result);
    setIsRunning(false);

    if (result.success) {
      const expectedOutput =
        currentProblem.expectedOutput[selectedLanguage];

      const testsPassed = checkIfTestsPassed(
        result.output,
        expectedOutput
      );

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!");
      } else {
        toast.error("Tests failed. Check your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong while running code");
    setIsRunning(false); // IMPORTANT
  }
  }

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };




  return (
    <div className="flex h-screen flex-col overflow-hidden bg-base-100">
      {/* Navbar */}
      <div className="fixed inset-x-0 top-0 z-50 h-16">
        <NavbarProblemPage />
      </div>

      {/* Main Content */}
      <div
        style={{ height: "calc(100vh - 64px)", marginTop: "64px" }}
        className="flex min-h-0 overflow-hidden"
      >
        <PanelGroup direction="horizontal" className="h-full min-h-0 w-full">
          {/* LEFT PANEL */}
          <Panel defaultSize={40} minSize={30} className="min-h-0 overflow-hidden">
            <ProblemDescriptionPanel
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handelProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>

          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary cursor-col-resize" />

          {/* RIGHT PANEL */}
          <Panel defaultSize={60} minSize={30} className="min-h-0 overflow-hidden">
            <PanelGroup direction="vertical" className="h-full min-h-0">
              {/* CODE EDITOR */}
              <Panel defaultSize={70} minSize={30} className="min-h-0 overflow-hidden">
                <div
                  className="h-full min-h-0 overflow-hidden border-b"
                  style={{
                    background: "#0d0f1e",
                    borderBottomColor: "rgba(99,102,241,0.08)",
                  }}
                >
                 <CodeEditor
  code={code}
  isRunning={isRunning}
  onCodeChange={setCode}
  selectedLanguage={selectedLanguage}
  onLanguageChange={handleLanguageChange}
  onRunCode={handleRunCode}
/>
                </div>
              </Panel>

              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary cursor-row-resize" />

              {/* OUTPUT PANEL */}
              <Panel defaultSize={30} minSize={10} className="min-h-0 overflow-hidden">
                <OutputPanel output={output} isRunning={isRunning} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
};

export default ProblemIdpage;

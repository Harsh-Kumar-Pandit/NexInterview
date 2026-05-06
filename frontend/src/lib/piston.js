const EXECUTION_API = "http://localhost:5000/api/code";

const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to executed
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code, runTests = true) {
  try {
    const languageId = LANGUAGE_IDS[language];

    if (!languageId) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    // Prepare the source code for execution: uncomment test-case lines only when runTests=true
    const preparedCode = runTests ? prepareCodeForExecution(language, code) : code;

    const response = await fetch(`${EXECUTION_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source_code: preparedCode,
        language_id: languageId,
        stdin: "",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return {
        success: false,
        error: errorData?.error || `HTTP error! status: ${response.status}`,
      };
    }

    const data = await response.json();
    const output = data.output || "";
    const stderr = data.error || "";

    if (stderr) {
      return {
        success: false,
        output: output,
        error: stderr,
      };
    }

    return {
      success: true,
      output: output || "No output",
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to execute code: ${error.message}`,
    };
  }
}

function prepareCodeForExecution(language, code) {
  if (!code) return code;

  const lines = code.split(/\r?\n/);

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (
      /Test cases \(commented out\)/i.test(l) ||
      /^\s*\/\/\s*Test cases/i.test(l) ||
      /^\s*#\s*Test cases/i.test(l)
    ) {
      // uncomment subsequent contiguous commented lines according to language
      let j = i + 1;
      for (; j < lines.length; j++) {
        const ln = lines[j];
        if (language === "javascript" || language === "java") {
          if (/^\s*\/\//.test(ln)) {
            lines[j] = ln.replace(/^\s*\/\/\s?/, "");
            continue;
          }
          // stop when a non-comment, non-empty line is reached
          if (/^\s*$/.test(ln)) continue;
          break;
        } else if (language === "python") {
          if (/^\s*#/.test(ln)) {
            lines[j] = ln.replace(/^\s*#\s?/, "");
            continue;
          }
          if (/^\s*$/.test(ln)) continue;
          break;
        } else {
          // other languages: attempt to remove // prefix
          if (/^\s*\/\//.test(ln)) {
            lines[j] = ln.replace(/^\s*\/\/\s?/, "");
            continue;
          }
          if (/^\s*$/.test(ln)) continue;
          break;
        }
      }
      break; // only process first occurrence
    }
  }

  // Additional pass: uncomment any commented test-call lines even without explicit marker
  for (let k = 0; k < lines.length; k++) {
    const ln = lines[k];
    if (language === "javascript") {
      if (/^\s*\/\/\s*console\.log\(/.test(ln)) {
        lines[k] = ln.replace(/^\s*\/\/\s?/, "");
      }
    } else if (language === "python") {
      if (/^\s*#\s*print\(/.test(ln)) {
        lines[k] = ln.replace(/^\s*#\s?/, "");
      }
    } else if (language === "java") {
      if (/^\s*\/\/\s*System\.out\.(println|print)\(/.test(ln) || /^\s*\/\/\s*System\.out\./.test(ln)) {
        lines[k] = ln.replace(/^\s*\/\/\s?/, "");
      }
    }
  }

  return lines.join("\n");
}

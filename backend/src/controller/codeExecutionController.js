import axios from "axios";

export const executeCode = async (req, res) => {
  try {
    const { source_code, language_id } = req.body ?? {};

    const response = await axios.post(
      "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
      {
        source_code,
        language_id,
        stdin: "",
      }
    );

    const { stdout, stderr, compile_output } = response.data;
    const output = stdout || "";
    const error = stderr || compile_output || "";

    res.json({
      success: !error,
      output,
      error,
    });
  } catch (error) {
    console.error("FULL ERROR:", error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      output: "",
      error: "Execution failed",
    });
  }
};

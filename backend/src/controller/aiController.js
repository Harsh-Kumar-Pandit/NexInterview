import { askAI } from "../lib/openrouter.js";

export const reviewCode = async (req, res) => {
  try {
    const { code, language, problemTitle } = req.body;

   const prompt = `You are an expert code reviewer for technical interviews.
Analyze the ${language} code below for the problem: "${problemTitle}".

Respond ONLY with valid JSON. No markdown, no explanation, no backticks.

{
  "score": <integer 1-10>,
  "correctness": "<1-2 sentences on whether logic is correct>",
  "bugs": "<bullet points starting with - for each bug found, or 'None found'>",
  "timeComplexity": "<e.g. O(n) — one line explanation>",
  "spaceComplexity": "<e.g. O(1) — one line explanation>",
  "betterApproach": "<2-3 lines describing a more optimal solution if exists>",
  "edgeCases": "<bullet points starting with - for missed edge cases>"
}

Code to analyze:
\`\`\`${language}
${code}
\`\`\``;

    const raw = await askAI(prompt);

    const clean = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(clean);

    res.json({
      success: true,
      review: parsed
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI review failed"
    });
  }
};
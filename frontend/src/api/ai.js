import axios from "../lib/axios";

export const reviewCode = async (data) => {
  const res = await axios.post("/ai/review", data);
  return res.data;
};
import express from "express";
import { executeCode } from "../controller/codeExecutionController.js";

const router = express.Router();

router.post("/execute", executeCode);

export default router;

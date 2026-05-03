import express from "express";
import { reviewCode } from "../controller/aiController.js";
import { protectRoute } from "../middleware/protectRoutes.js";

const router = express.Router();

router.post("/review", protectRoute, reviewCode);

export default router;
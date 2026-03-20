import express from "express";
import { protectRoute } from "../middleware/protectRoutes.js";
import { getStreamToken } from "../controller/chatController.js";

const router = express.Router();

router.get("/token", protectRoute, getStreamToken);

export default router;
import express from "express";
import * as authController from "../controllers/authController.js";
import { requireAuth } from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.post("/register", authController.register);

authRouter.post("/verify-email", authController.verifyEmail);

authRouter.post("/login", authController.login);

authRouter.post("/refresh", authController.refreshToken);

authRouter.get("/me", requireAuth, authController.getMe);

authRouter.post("/complete-profile", requireAuth, authController.completeProfile);

authRouter.post("/logout", requireAuth, authController.logout);

authRouter.post("/logout-all", requireAuth, authController.logoutAll);

export default authRouter;

import { Router, Request, Response } from "express";
import passport from "passport";
import axios from "axios";
import authControllers from "../controllers/auth_controller";

const router = Router();

router.get("/google",authControllers.googleAuthWithPassport);

router.get("/google/callback",authControllers.googleAuthCallbackWithPassport,authControllers.getEmails);

router.get("/emails", authControllers.getEmailsHandler);

router.get("/fail", authControllers.authFailHandler);

export default router;

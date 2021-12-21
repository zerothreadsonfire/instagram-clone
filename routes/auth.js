import express from "express";

import { homePage, signUp, login, dummyfn } from "../controllers/authController.js";

import { requireLogin } from "../middlewares/requireLogin.js";

const router = express.Router();

router.get("/", homePage).get("/protected", requireLogin, dummyfn);
router.post("/signup", signUp).post("/login", login);

export default router;
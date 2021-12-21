import express from "express";

import { homePage, signUp, login } from "../controllers/authController.js";

const router = express.Router();

router.get("/", homePage);
router.post("/signup", signUp).post("/login", login);

export default router;
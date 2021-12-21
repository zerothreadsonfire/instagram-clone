import express from "express";

import { getPosts, createPost } from "../controllers/postController.js";

import { requireLogin } from "../middlewares/requireLogin.js";

const router = express.Router();

router.get("/allposts", getPosts);
router.post("/createpost", requireLogin, createPost)

export default router;
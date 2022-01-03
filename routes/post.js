import express from "express";

import { getPosts, getUserPosts, createPost } from "../controllers/postController.js";

import { requireLogin } from "../middlewares/requireLogin.js";

const router = express.Router();

router.get("/myposts", requireLogin, getUserPosts).get("/allposts", requireLogin, getPosts);
router.post("/createpost", requireLogin, createPost)

export default router;
import express from "express"
import { createComment, getCommentBySnippetId } from "../controller/comment.js";

const router = express.Router();

router.route("/:id/comment").post(createComment);
router.route("/:id/comment").get(getCommentBySnippetId);

export default router;
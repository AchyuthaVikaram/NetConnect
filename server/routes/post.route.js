import { Router } from "express";
import { activeCheck, createPost, deleteComment, deletePost, getALlPosts, likePost, postComment, showAllCommentsForPost } from "../controllers/post.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import multer from "multer";
import {storage} from "../utils/configCloud.js"
const upload= multer({storage});

const router= Router();

router.route("/").get(activeCheck);
router.route("/post").post(isAuthenticated,upload.single("media"),createPost);
router.route("/posts").get(getALlPosts);
router.route("/delete_post").post(deletePost);
router.route("/comment").post(isAuthenticated,postComment);
router.route("/get/comments").get(showAllCommentsForPost);
router.route("/delete_comment").post(isAuthenticated,deleteComment);
router.route("/like").post(isAuthenticated,likePost);


export default router;
import Comment from "../models/comments.model.js";
import Post from "../models/post.model.js";
import Client from "../models/user.model.js";

export const activeCheck = (req, res) => {
	return res.status(200).json({ message: "RUNNING" });
};

export const createPost = async (req, res) => {
	try {
		const user = req.user;
		const post = new Post({
			userId: user._id,
			body: req.body.body,
			media: req.file !== undefined ? req.file.path : "",
			fileType: req.file !== undefined ? req.file.mimetype.split("/")[1] : "",
		});
		await post.save();
		return res.status(200).json({ message: "post created" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: e.message });
	}
};

export const getALlPosts = async (req, res) => {
	try {
		const posts = await Post.find().populate("userId");
		return res.status(200).json(posts);
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: e });
	}
};

export const deletePost = async (req, res) => {
	try {
		const { token } = req.body;
		if (!token) {
			return res.status(400).json({ message: "Token  is required" });
		}
		const user = await Client.findOne({ token });
		if (!user) {
			return res.status(400).json({ message: "User  not found" });
		}
		const { post_id } = req.body;
		const post = await Post.findById(post_id);
		if (post.userId.toString() !== user._id.toString()) {
			return res
				.status(400)
				.json({ message: "You are not autherized to delete this post" });
		}
		await Post.deleteOne({ _id: post_id });

		return res.status(200).json({ message: "Post deleted" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: e.message });
	}
};

export const postComment = async (req, res) => {
	try {
		const user = req.user;
		const { post_id } = req.body;
		const post = await Post.findById(post_id);
		if (!post) {
			return res.status(400).json({ message: "Post not found" });
		}
		const comment = new Comment({
			body: req.body.body,
			userId: user._id,
			postId: post_id,
		});
		await comment.save();
		return res.status(200).json({ message: "Comment added" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: e.message });
	}
};

export const showAllCommentsForPost = async (req, res) => {
	try {
		const { postId } = req.query;
		const comments = await Comment.find({ postId }).populate("userId");
		return res.status(200).json(comments.reverse());
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: e.message });
	}
};

export const deleteComment = async (req, res) => {
	try {
		const user = req.user;
		const { commentId } = req.body;
		const comment = await Comment.findById(commentId);
		if (!comment) {
			return res.status(400).json({ message: "Comment not found" });
		}
		if (comment.userId.toString() !== user._id.toString()) {
			return res.status(400).json({ message: "You can't delete this comment" });
		}
		await comment.remove();
		return res.status(200).json({ message: "Comment deleted" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: e.message });
	}
};

export const likePost = async (req, res) => {
	try {
		const user = req.user;
		const { postId } = req.body;
		const post = await Post.findById(postId);
		if (!post) {
			return res.status(400).json({ message: "Post not found" });
		}
		post.likes = post.likes + 1;
		await post.save();
		return res.status(200).json({ message: "Post liked" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ message: e.message });
	}
};

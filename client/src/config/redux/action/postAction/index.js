import { createServer } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk(
	"post/getAllPost",
	async (_, thunkApi) => {
		try {
			const res = await createServer.get("/posts");
			return thunkApi.fulfillWithValue(res.data);
		} catch (err) {
			return thunkApi.rejectWithValue(err.response.data.message);
		}
	}
);

export const createPost = createAsyncThunk(
	"post/createpost",
	async (data, thunkApi) => {
		const { file, body } = data;
		try {
			const formData = new FormData();
			formData.append("token", localStorage.getItem("token"));
			formData.append("body", body);
			formData.append("media", file);

			const response = await createServer.post("/post", formData, {
				headers: {
					"Content-Type": "multipart/formdata",
				},
				params: {
					token: localStorage.getItem("token"),
				},
			});

			if (response.status == 200) {
				return thunkApi.fulfillWithValue("Post uploaded");
			} else {
				return thunkApi.rejectWithValue("post not uploaded");
			}
		} catch (e) {
			thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

export const deletePost = createAsyncThunk(
	"post/deletepost",
	async (body, thunkApi) => {
		const { post_id, token } = body;
		try {
			const res = await createServer.post("/delete_post", {
				post_id: post_id,
				token: token,
			});

			thunkApi.fulfillWithValue(res.data);
		} catch (e) {
			thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

export const incrementLike = createAsyncThunk(
	"post/incrementlike",
	async (post, thunkApi) => {
		try {
			const res = await createServer.post(
				"/like",
				{
					postId: post._id,
				},
				{
					params: {
						token: localStorage.getItem("token"),
					},
				}
			);
			return thunkApi.fulfillWithValue(res.data.message);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

export const getAllComments = createAsyncThunk(
	"post/getallcomments",
	async (postId, thunkApi) => {
		try {
			const res = await createServer.get("/get/comments", {
				params: { postId },
			});

			return thunkApi.fulfillWithValue({
				comments: res.data || [], // Ensure comments is always an array
				postId,
			});
		} catch (e) {
			const errorMessage =
				e.response?.data?.message || "Failed to fetch comments";
			return thunkApi.rejectWithValue(errorMessage);
		}
	}
);

export const postComment = createAsyncThunk(
	"post/postcomment",
	async (data, thunkApi) => {
		try {
			const res = await createServer.post(
				"/comment",
				{
					post_id: data.postId,
					body: data.comment,
				},
				{
					params: {
						token: localStorage.getItem("token"),
					},
				}
			);
			return thunkApi.fulfillWithValue(res.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

export const deleteComment = createAsyncThunk(
	"post/deletecomment",
	async (commentId, thunkApi) => {
		try {
			const res = await createServer.post(
				"/delete_comment",
				{
					commentId,
				},
				{
					params: {
						token: localStorage.getItem("token"),
					},
				}
			);
			return thunkApi.fulfillWithValue(res.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

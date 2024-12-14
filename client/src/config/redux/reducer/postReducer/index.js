import { createSlice } from "@reduxjs/toolkit";
import {
	createPost,
	deleteComment,
	deletePost,
	getAllComments,
	getAllPosts,
	incrementLike,
	postComment,
} from "../../action/postAction";
const initialState = {
	posts: [],
	isError: false,
	isLoading: false,
	postFetched: false,
	message: "",
	loggedIn: false,
	comments: [],
	postid: "",
    postLikes:""
};

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		reset: () => initialState,
		resetPostId: (state) => {
			state.postid = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllPosts.pending, (state) => {
				state.isLoading = true;
				state.postFetched = false;
				state.message = "fetching...";
			})
			.addCase(getAllPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.postFetched = true;
				state.posts = action.payload.reverse();
				state.message = "Posts fetched ";
			})
			.addCase(getAllPosts.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.postFetched = false;
				state.message = action.payload;
			})
			.addCase(createPost.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.isError = false;
				state.message = action.payload;
			})
			.addCase(deletePost.rejected, (state, action) => {
				state.isError = false;
				state.message = action.payload;
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				state.isError = false;
				state.message = action.payload;
			})
			.addCase(incrementLike.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(incrementLike.fulfilled, (state, action) => {
				state.isError = false;
				state.postLikes = action.payload;
			})
			.addCase(getAllComments.fulfilled, (state, action) => {
				state.comments = action.payload.comments;
				state.postid = action.payload.postId;
				state.isError = false;
			})
			.addCase(postComment.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(postComment.fulfilled, (state, action) => {
				state.isError = false;
				state.message = action.payload;
			})
			.addCase(deleteComment.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteComment.fulfilled, (state, action) => {
				state.isError = false;
				state.message = action.payload;
			})

	},
});
export const { resetPostId } = postSlice.actions;
export default postSlice.reducer;

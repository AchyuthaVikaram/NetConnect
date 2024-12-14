import { getUserData } from "@/config/redux/action/authAction";
import {
	createPost,
	deleteComment,
	deletePost,
	getAllComments,
	getAllPosts,
	incrementLike,
	postComment,
} from "@/config/redux/action/postAction";
import DashboardLayout from "@/layouts/dashboardLayout";
import UserLayout from "@/layouts/userLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { BASE_URL } from "@/config";
import { resetPostId } from "@/config/redux/reducer/postReducer";

function Dashboard() {
	const router = useRouter();
	const authState = useSelector((store) => store.auth);
	const postState = useSelector((store) => store.posts);
	const dispatch = useDispatch();
	const [postContent, setPostContent] = useState("");
	const [fileContent, setFileContent] = useState();
	const [comment, setComment] = useState("");
	useEffect(() => {
		dispatch(getUserData());
		dispatch(getAllPosts());
		// if (!authState.all_profiles_fetched) dispatch(getAllUsers());
	}, [authState.isTokenThere]);

	const handleFileUpload = async () => {
		const res = await dispatch(
			createPost({ file: fileContent, body: postContent })
		);
		setPostContent("");
		setFileContent();
		dispatch(getAllPosts());
	};
	const handleDeletePost = async (postId) => {
		const res = await dispatch(
			deletePost({ post_id: postId, token: localStorage.getItem("token") })
		);
		dispatch(getAllPosts());
	};
	return (
		<UserLayout>
			<DashboardLayout>
				<div className="scrollComponent">
					<div
						style={{ marginTop: "1rem", marginBottom: "2rem" }}
						className={style.createPostContainer}
					>
						<img
							onClick={() => {
								router.push(`/view_profile/${authState.user.userId?.username}`);
							}}
							className={style.profilePhoto}
							src={
								authState.user.userId?.profilePicture === "default.jpg"
									? `${BASE_URL}/${authState.user.userId?.profilePicture}`
									: authState.user.userId?.profilePicture
							}
							alt="img"
						/>
						<textarea
							onChange={(e) => setPostContent(e.target.value)}
							value={postContent}
							placeholder="what's in your mind?"
							className={style.textarea}
							name=""
							id=""
						></textarea>

						<div className={style.fab} onClick={handleFileUpload}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
						</div>

						<input
							onChange={(e) => setFileContent(e.target.files[0])}
							type="file"
							hidden
							name="upload"
							id="fileupload"
						/>
						<label htmlFor="fileupload">
							{" "}
							{postContent && postContent.length > 0 && (
								<div className={style.uploadButton}>Upload File</div>
							)}{" "}
						</label>
					</div>
					<div className={style.postContainer}>
						{postState.postFetched &&
							postState.posts.map((post, index) => (
								<div key={index} className={style.postCard}>
									<div className={style.postProfile}>
										<div className={style.postHeader}>
											<img
												className={style.userProfile}
												src={
													post.userId.profilePicture === "default.jpg"
														? `${BASE_URL}/${post.userId.profilePicture}`
														: post.userId.profilePicture
												}
												alt="img"
											/>
											<div
												onClick={() => {
													router.push(`/view_profile/${post.userId.username}`);
												}}
												className={style.postDeatils}
											>
												<p style={{ fontWeight: "bold" }}>{post.userId.name}</p>
												<p style={{ fontStyle: "italic" }}>
													@{post.userId.username}
												</p>
											</div>
										</div>
										{post.userId?._id == authState.user?.userId?._id && (
											<div
												onClick={() => handleDeletePost(post._id)}
												className={style.deleteIcon}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="size-6"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
													/>
												</svg>
											</div>
										)}
									</div>
									<div className={style.postBio}>
										<p>{post.body}</p>
									</div>
									<div className={style.postPics}>
										{post.media && <img src={`${post.media}`} alt="post Pic" />}
									</div>
									<div className={style.postOptions}>
										<div
											onClick={() => {
												dispatch(incrementLike(post));
												dispatch(getAllPosts());
											}}
											className={style.postLike}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
												/>
											</svg>
											<span>{post.likes} </span>
										</div>
										<div
											onClick={() => {
												dispatch(getAllComments(post._id));
											}}
											className={style.postComment}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
												/>
											</svg>{" "}
										</div>
										<div
											onClick={() => {
												const text = encodeURIComponent(post.body);
												const uri = encodeURIComponent(BASE_URL);
												const twitterUrl = `https://x.com/intent/tweet?text=${text}&url=${uri}`;
												window.open(twitterUrl, "_blank");
											}}
											className={style.postShare}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="size-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
												/>
											</svg>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>

				{postState.postid != "" && (
					<div
						onClick={() => {
							dispatch(resetPostId());
						}}
						className={style.commentContainer}
					>
						<div
							onClick={(e) => {
								e.stopPropagation();
							}}
							className={style.commentBox}
						>
							{postState.comments.length == 0 && <h2>No Comments Yet</h2>}

							{postState.comments.length != 0 && (
								<div className={style.allComments}>
									{postState.comments.map((comment, index) => (
										<div className={style.singleComment} key={index}>
											<div className={style.postProfile}>
												<div className={style.postHeader}>
													<img
														className={style.userProfileComment}
														src={
															comment.userId.profilePicture === "default.jpg"
																? `${BASE_URL}/${comment.userId.profilePicture}`
																: comment.userId.profilePicture
														}
														alt="img"
													/>
													<div className={style.commentDeatils}>
														<p style={{ fontWeight: "bold" }}>
															{comment.userId.name}
														</p>
														<p style={{ fontStyle: "italic" }}>
															@{comment.userId.username}
														</p>
													</div>
												</div>
												{comment.userId?._id == authState.user?.userId?._id && (
													<div
														onClick={() => {
															dispatch(deleteComment(comment._id));
															dispatch(getAllComments(postState.postid));
															dispatch(getAllComments(postState.postid));
														}}
														className={style.deleteCommentIcon}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															stroke="currentColor"
															className="size-6"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
															/>
														</svg>
													</div>
												)}
											</div>
											<div className={style.commentBio}>
												<p>{comment.body}</p>
											</div>
										</div>
									))}
								</div>
							)}

							<div className={style.postCommentBox}>
								<input
									type="text"
									value={comment}
									onChange={(e) => setComment(e.target.value)}
									placeholder="Comment on this..."
								/>
								<div
									onClick={() => {
										dispatch(
											postComment({
												postId: postState.postid,
												comment: comment,
											})
										);
										dispatch(getAllComments(postState.postid));
										dispatch(getAllComments(postState.postid));
										setComment("");
									}}
									className={style.commentButton}
								>
									<p>Comment</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</DashboardLayout>
		</UserLayout>
	);
}

export default Dashboard;

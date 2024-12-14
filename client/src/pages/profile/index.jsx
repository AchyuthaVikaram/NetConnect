import UserLayout from "@/layouts/userLayout";
import React, { useEffect, useState } from "react";
import DashboardLayout from "@/layouts/dashboardLayout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "@/config/redux/action/postAction";
import styles from "./index.module.css";
import { BASE_URL, createServer } from "@/config";
import { getUserData } from "@/config/redux/action/authAction";

export default function index() {
	const postState = useSelector((store) => store.posts);
	const authState = useSelector((store) => store.auth);

	const dispatch = useDispatch();

	const [userPosts, setUserPosts] = useState([]);

	const [userProfile, setUserProfile] = useState({});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [inputWorkData, setInputWorkData] = useState({
		company: "",
		position: "",
		years: "",
	});

	const handleInputWorkChange = (e) => {
		setInputWorkData({
			...inputWorkData,
			[e.target.name]: e.target.value,
		});
	};

	const [isEducationOpen, setIsEducationOpen] = useState(false);
	const [inputEduData, setInputEduData] = useState({
		school: "",
		degree: "",
		filedOfStudy: "",
	});

	const handleInputEduChange = (e) => {
		setInputEduData({
			...inputEduData,
			[e.target.name]: e.target.value,
		});
	};

	const getUserPost = () => {
		dispatch(getAllPosts());
	};
	useEffect(() => {
		if (authState.user.userId == null) {
			dispatch(getUserData());
			setUserProfile(authState.user);
		} else {
			let posts = postState.posts.filter(
				(post) => post.userId.username === authState.user.userId.username
			);
			setUserPosts(posts);
		}
	}, [postState.posts]);
	useEffect(() => {
		getUserPost();
	}, []);

	const uploadProfilePhoto = async (file) => {
		const formData = new FormData();
		formData.append("profilePicture", file);
		formData.append("token", localStorage.getItem("token"));
		try {
			const response = await createServer.post(
				"/update_profile_picture",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			dispatch(getUserData());
			setUserProfile(authState.user);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		setUserProfile(authState.user);
	}, [authState.user]);

	const updateProfile = async () => {
		try {
			const response = await createServer.post("/user_update", {
				token: localStorage.getItem("token"),
				name: userProfile.userId.name,
			});

			const res = await createServer.post("/update_profile_data", {
				token: localStorage.getItem("token"),
				bio: userProfile.bio,
				currPost: userProfile.currPost,
				pastWork: userProfile.pastWork,
				education: userProfile.education,
			});

			dispatch(getUserData());
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<UserLayout>
			<DashboardLayout>
				{authState.user.userId && (
					<div className={styles.container}>
						<div className={styles.backDropConatiner}>
							<label
								htmlFor="profilePictureUpload"
								className={styles.backdrop_overlay}
							>
								<p>Edit</p>
							</label>
							<input
								type="file"
								hidden
								id="profilePictureUpload"
								name="profilePictureUpload"
								onChange={(e) => {
									uploadProfilePhoto(e.target.files[0]);
								}}
							></input>

							<img
								className={styles.backDropImage}
								src={
									authState.user.userId.profilePicture === "default.jpg"
										? `${BASE_URL}/${authState.user.userId.profilePicture}`
										: authState.user.userId.profilePicture
								}
								alt="usreImg"
							/>
						</div>
						<div className={styles.profile_conatiner}>
							<div className={styles.profile_style}>
								<div style={{ flex: "0.7" }}>
									<div className={styles.inputParent}>
										<input
											className={styles.nameEdit}
											type="text"
											value={userProfile.userId?.name}
											onChange={(e) => {
												setUserProfile({
													...userProfile,
													userId: {
														...userProfile.userId,
														name: e.target.value,
													},
												});
											}}
										/>

										<input
											className={styles.userNameEdit}
											type="text"
											value={"@" + userProfile.userId?.username}
											onChange={(e) => {
												setUserProfile({
													...userProfile,
													userId: {
														...userProfile.userId,
														username: e.target.value,
													},
												});
											}}
										/>
									</div>

									<div>
										<textarea
											name="bio"
											onChange={(e) => {
												setUserProfile({ ...userProfile, bio: e.target.value });
											}}
											value={userProfile.bio}
											rows={Math.max(
												3,
												Math.ceil(userProfile.bio?.length / 80)
											)}
											style={{ width: "100%" }}
										></textarea>
										<p>{authState.user.userId.bio}</p>
									</div>
									<div className={styles.work_history}>
										<h4 style={{ marginBlock: "1rem" }}>Work History</h4>
										<div className={styles.work_history_list}>
											{authState.user.pastWork.map((work, index) => (
												<div key={index} className={styles.work_history_card}>
													<p
														style={{
															fontWeight: "bold",
															display: "flex",
															alignItems: "center",
															gap: "1.5rem",
															marginBlock: "1rem",
														}}
													>
														{work.company} -{work.position}
													</p>
													<p>
														{" "}
														<span
															style={{ color: "gray", paddingRight: "0.5rem" }}
														>
															Working Years:
														</span>
														{work.years}
													</p>
												</div>
											))}
										</div>
										<button
											onClick={() => {
												setIsModalOpen(true);
											}}
											className={styles.addWorkBtn}
										>
											Add Work
										</button>
									</div>
									<div className={styles.work_history}>
										<h4 style={{ marginBlock: "1rem" }}>Education</h4>
										<div className={styles.work_history_list}>
											{authState.user.education.map((education, index) => (
												<div key={index} className={styles.work_history_card}>
													<p
														style={{
															fontWeight: "bold",
															display: "flex",
															alignItems: "center",
															gap: "1.5rem",
															marginBlock: "1rem",
														}}
													>
														<p>{education.school}</p>
														<p>-{education.degree}</p>
													</p>
													<p>
														{" "}
														<span
															style={{ color: "gray", paddingRight: "0.5rem" }}
														>
															Field Of Study:
														</span>
														{education.filedOfStudy}
													</p>
												</div>
											))}
										</div>
										<button
											onClick={() => {
												setIsEducationOpen(true);
											}}
											className={styles.addWorkBtn}
										>
											Add Education
										</button>
									</div>
									{userProfile !== authState.user && (
										<button
											onClick={updateProfile}
											className={styles.saveChanges}
										>
											{" "}
											update
										</button>
									)}
								</div>

								<div style={{ flex: "0.3", width: "100%" }}>
									<h3 style={{ marginBlock: "1rem" }}>Recent Activity</h3>
									{userPosts.map((post, index) => (
										<div className={styles.postCard} key={index}>
											<div className={styles.card}>
												<div className={styles.card_profile}>
													{post.media !== "" ? (
														<img src={`${post.media}`} alt="post media"></img>
													) : (
														<p>No Media</p>
													)}
												</div>
												<p>
													{post.body.length > 20
														? post.body.substring(0, 20) + "..."
														: post.body}{" "}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				)}

				{isModalOpen && (
					<div
						onClick={() => {
							setIsModalOpen(false);
						}}
						className={styles.commentContainer}
					>
						<div
							onClick={(e) => {
								e.stopPropagation();
							}}
							className={styles.commentBox}
						>
							<div className={styles.input}>
								<input
									type="text"
									placeholder="Company"
									name="company"
									id="company"
									className={styles.input_control}
									value={inputWorkData.company}
									onChange={handleInputWorkChange}
								/>
							</div>
							<div className={styles.input}>
								<input
									type="text"
									placeholder="Position"
									name="position"
									id="position"
									className={styles.input_control}
									value={inputWorkData.position}
									onChange={handleInputWorkChange}
								/>
							</div>
							<div className={styles.input}>
								<input
									type="text"
									placeholder="Years"
									name="years"
									id="years"
									className={styles.input_control}
									value={inputWorkData.years}
									onChange={handleInputWorkChange}
								/>
							</div>
							<button
								onClick={() => {
									setUserProfile({
										...userProfile,
										pastWork: [...userProfile.pastWork, inputWorkData],
									});
									company;
									setIsModalOpen(false);
								}}
								className={styles.submit_button}
							>
								Add Work
							</button>
						</div>
					</div>
				)}

				{isEducationOpen && (
					<div
						onClick={() => {
							setIsEducationOpen(false);
						}}
						className={styles.commentContainer}
					>
						<div
							onClick={(e) => {
								e.stopPropagation();
							}}
							className={styles.commentBox}
						>
							<div className={styles.input}>
								<input
									type="text"
									placeholder="Name of College/School"
									name="school"
									id="school"
									className={styles.input_control}
									value={inputEduData.school}
									onChange={handleInputEduChange}
								/>
							</div>
							<div className={styles.input}>
								<input
									type="text"
									placeholder="Name of Degree"
									name="degree"
									id="degree"
									className={styles.input_control}
									value={inputEduData.degree}
									onChange={handleInputEduChange}
								/>
							</div>
							<div className={styles.input}>
								<input
									type="text"
									placeholder="Field of Study"
									name="filedOfStudy"
									id="filedOfStudy"
									className={styles.input_control}
									value={inputEduData.filedOfStudy}
									onChange={handleInputEduChange}
								/>
							</div>
							<button
								onClick={() => {
									setUserProfile({
										...userProfile,
										education: [...userProfile.education, inputEduData],
									});
									setIsEducationOpen(false);
								}}
								className={styles.submit_button}
							>
								Add Education
							</button>
						</div>
					</div>
				)}
			</DashboardLayout>
		</UserLayout>
	);
}

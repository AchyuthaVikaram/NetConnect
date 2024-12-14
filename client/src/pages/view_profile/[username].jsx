import { BASE_URL, createServer } from "@/config";
import DashboardLayout from "@/layouts/dashboardLayout";
import UserLayout from "@/layouts/userLayout";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/config/redux/action/postAction";
import {
	getReceivedConnections,
	sendConnectionRequest,
	senttConnectionRequests,
} from "@/config/redux/action/authAction";

function ViewProfile({ profile }) {
	const router = useRouter();
	const postState = useSelector((store) => store.posts);
	const authState = useSelector((store) => store.auth);
	const dispatch = useDispatch();

	const [userPosts, setUserPosts] = useState([]);
	const [isCurrentUserIsConnection, setIsCurrentUserIsConnection] =
		useState(false);
	const [isConnectionNull, setIsConnectionNull] = useState(true);

	const getUserPost = () => {
		dispatch(getAllPosts());
		dispatch(senttConnectionRequests());
		dispatch(getReceivedConnections());
	};

	useEffect(() => {
		let posts = postState.posts.filter(
			(post) => post.userId.username === router.query.username
		);
		setUserPosts(posts);
	}, [postState.posts]);

	useEffect(() => {
		if (
			authState.connections.some(
				(user) => user.connectionId._id === profile.userId._id
			)
		) {
			setIsCurrentUserIsConnection(true);
			if (
				authState.connections.find(
					(user) => user.connectionId._id === profile.userId._id
				).status_accepted == true
			) {
				setIsConnectionNull(false);
			}
		}

		if (
			authState.connectionRequest.some(
				(user) => user.userId._id === profile.userId._id
			)
		) {
			setIsCurrentUserIsConnection(true);
			if (
				authState.connectionRequest.find(
					(user) => user.userId._id === profile.userId._id
				).status_accepted == true
			) {
				setIsConnectionNull(false);
			}
		}
	}, [authState.connections, authState.connectionRequest]);

	useEffect(() => {
		getUserPost();
		
	}, []);
	useEffect(()=>{
		setIsConnectionNull(true);
		setIsCurrentUserIsConnection(null);
	},[authState.user.userId])
	return (
		<UserLayout>
			<DashboardLayout>
				<div className={styles.container}>
					<div className={styles.backDropConatiner}>
						<img
							className={styles.backDropImage}
							src={
								profile.userId.profilePicture === "default.jpg"
									? `${BASE_URL}/${profile.userId.profilePicture}`
									: profile.userId.profilePicture
							}
							alt="Profile Picture"
						/>
					</div>
					<div className={styles.profile_conatiner}>
						<div className={styles.profile_Container_flex}>
							<div style={{ flex: "0.8" }}>
								<div
									style={{
										display: "flex",
										width: "fit-content",
										alignItems: "center",
										gap: "0.5rem",
									}}
								>
									<h2>{profile.userId.name}</h2>
									<p style={{ color: "gray" }}>@{profile.userId.username}</p>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "0.7rem",
										marginTop: "1rem",
									}}
								>
									{isCurrentUserIsConnection ? (
										<button className={styles.connectedButton}>
											{isConnectionNull ? "Pending" : "Connected"}
										</button>
									) : (
										<button
											className={styles.connectButton}
											onClick={() => {
												dispatch(sendConnectionRequest(profile.userId._id));
												dispatch(senttConnectionRequests());
											}}
										>
											Connect
										</button>
									)}
									<div
										onClick={async () => {
											const res = await createServer.get(
												`/user/download_resume?id=${profile.userId._id}`
											);

											window.open(
												`${BASE_URL}/${res.data.outputPath}`,
												"_blank"
											);
										}}
										style={{ cursor: "pointer", marginBottom: "1rem" }}
									>
										<svg
											style={{ width: "1.3rem" }}
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
												d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
											/>
										</svg>
									</div>
								</div>
								<div>
									<p style={{ marginTop: "1rem" }}>{profile.bio}</p>
								</div>
								<div className={styles.work_history}>
									<h4 style={{ marginBlock: "1rem" }}>Work History</h4>
									<div className={styles.work_history_list}>
										{profile.pastWork.map((work, index) => (
											<div key={index} className={styles.work_history_card}>
												<p
													style={{
														fontWeight: "bold",
														display: "flex",
														alignItems: "center",
														gap: "0.5rem",
													}}
												>
													{work.company}-{work.position}
												</p>
												<p>{work.years}</p>
											</div>
										))}
									</div>
								</div>
							</div>

							<div style={{ flex: "0.2" }}>
								<h3>Recenet Activity</h3>
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
			</DashboardLayout>
		</UserLayout>
	);
}

export async function getServerSideProps(context) {
	const request = await createServer.get("/get/user_by_name", {
		params: {
			username: context.query.username,
		},
	});
	const response = await request.data;
	// Pass data to the page via props
	return { props: { profile: response.profile } };
}

export default ViewProfile;

import {
	getReceivedConnections,
	senttConnectionRequests,
	updateStatusOfConnection,
} from "@/config/redux/action/authAction";
import DashboardLayout from "@/layouts/dashboardLayout";
import UserLayout from "@/layouts/userLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { BASE_URL } from "@/config";
import { useRouter } from "next/router";

function MyConnections() {
	const dispatch = useDispatch();
	const authState = useSelector((store) => store.auth);
	useEffect(() => {
		dispatch(getReceivedConnections());
		dispatch(senttConnectionRequests());
	}, [authState.connectionRequest, authState.connections]);

	const router = useRouter();
	return (
		<UserLayout>
			<DashboardLayout>
				<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					<h4>My Connetions</h4>
					{authState.connectionRequest.length == 0 && (
						<h2>No Connection Requests Pending</h2>
					)}
					<div className={styles.userContainer}>
						{authState.connectionRequest.length != 0 &&
							authState.connectionRequest
								.filter((connection) => connection.status_accepted == null)
								.map((user, index) => {
									return (
										<div
											key={index}
											onClick={() => {
												router.push(`/view_profile/${user.userId.username}`);
											}}
											className={styles.userCardLayout}
										>
											<div className={styles.userCard}>
												<img
												    style={{borderRadius:"50%"}}
													src={
														user.userId.profilePicture === "default.jpg"
															? `${BASE_URL}/${user.userId.profilePicture}`
															: user.userId.profilePicture
													}
													alt="usreImg"
												/>
												<div className={styles.useDetails}>
													<h2 style={{ marginTop: "0.5rem" }}>
														{user.userId.name}
													</h2>
													<p style={{ fontStyle: "italic" }}>
														@{user.userId.username}
													</p>
												</div>
											</div>
											<div className={styles.btns}>
												<button
													className={styles.acceptBtn}
													onClick={(e) => {
														e.stopPropagation();
														dispatch(
															updateStatusOfConnection({
																status: "accept",
																requestId: user._id,
															})
														);
														dispatch(getReceivedConnections());
													}}
												>
													Accept
												</button>
												<button
													className={styles.rejectBtn}
													onClick={(e) => {
														e.stopPropagation();
														dispatch(
															updateStatusOfConnection({
																status: "reject",
																requestId: user._id,
															})
														);
														dispatch(getReceivedConnections());
													}}
												>
													Reject
												</button>
											</div>
										</div>
									);
								})}
					</div>

					<h4>My Network</h4>
					{authState.connectionRequest.length != 0 &&
						authState.connectionRequest.filter(
							(connection) => connection.status_accepted == true
						).length == 0 &&
						authState.connections.length != 0 &&
						authState.connections.filter(
							(connection) => connection.status_accepted == true
						).length == 0 && <h2>No Connections & Add oone!</h2>}
					<div className={styles.userContainer}>
						{authState.connectionRequest.length != 0 &&
							authState.connectionRequest
								.filter((connection) => connection.status_accepted == true)
								.map((user, index) => {
									return (
										<div
											key={index}
											onClick={() => {
												router.push(`/view_profile/${user.userId.username}`);
											}}
											className={styles.userCardLayout}
										>
											<div className={styles.userCard}>
												<img
												    style={{borderRadius:"50%"}}
													src={
														user.userId.profilePicture === "default.jpg"
															? `${BASE_URL}/${user.userId.profilePicture}`
															: user.userId.profilePicture
													}
													alt="usreImg"
												/>
												<div className={styles.useDetails}>
													<h2 style={{ marginTop: "0.5rem" }}>
														{user.userId.name}
													</h2>
													<p style={{ fontStyle: "italic" }}>
														@{user.userId.username}
													</p>
												</div>
											</div>
											<div className={styles.btns}>
												<button
													className={styles.acceptBtn}
													onClick={(e) => {
														e.stopPropagation();
													}}
													disabled
												>
													Message
												</button>
											</div>
										</div>
									);
								})}
						{authState.connections.length != 0 &&
							authState.connections
								.filter((connection) => connection.status_accepted == true)
								.map((user, index) => {
									return (
										<div
											key={index}
											onClick={() => {
												router.push(
													`/view_profile/${user.connectionId.username}`
												);
											}}
											className={styles.userCardLayout}
										>
											<div className={styles.userCard}>
												<img
												    style={{borderRadius:"50%"}}
													src={
														user.connectionId.profilePicture === "default.jpg"
															? `${BASE_URL}/${user.connectionId.profilePicture}`
															: user.connectionId.profilePicture
													}
													alt="usreImg"
												/>
												<div className={styles.useDetails}>
													<h2 style={{ marginTop: "0.5rem" }}>
														{user.connectionId.name}
													</h2>
													<p style={{ fontStyle: "italic" }}>
														@{user.connectionId.username}
													</p>
												</div>
											</div>
											<div className={styles.btns}>
												<button
													className={styles.acceptBtn}
													onClick={(e) => {
														e.stopPropagation();
													}}
													disabled
												>
													Message
												</button>
											</div>
										</div>
									);
								})}
					</div>
				</div>
			</DashboardLayout>
		</UserLayout>
	);
}

export default MyConnections;

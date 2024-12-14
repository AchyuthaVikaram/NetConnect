import { getAllUsers } from "@/config/redux/action/authAction";
import DashboardLayout from "@/layouts/dashboardLayout";
import UserLayout from "@/layouts/userLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./index.module.css";
import { BASE_URL } from "@/config";
import { useRouter } from "next/router";

function Discover() {
	const authState = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!authState.all_profiles_fetched) dispatch(getAllUsers());
	}, []);
	useEffect(() => {
		dispatch(getAllUsers());
	}, []);
	const router = useRouter();
	return (
		<UserLayout>
			<DashboardLayout>
				<div>
					<h1 style={{ marginBlock: "1rem" }}>Discover</h1>
					<div className={style.userContainer}>
						{authState.all_profiles_fetched &&
							authState.all_users
								.filter(
									(user) => user.userId.token !== localStorage.getItem("token") // Exclude current user
								)
								.map((user, index) => (
									<div
										key={index}
										onClick={() => {
											router.push(`/view_profile/${user.userId.username}`);
										}}
										className={style.userCard}
									>
										<img
											style={{ borderRadius: "50%" }}
											src={
												user.userId.profilePicture === "default.jpg"
													? `${BASE_URL}/${user.userId.profilePicture}`
													: user.userId.profilePicture
											}
											alt="usreImg"
										/>
										<div className={style.useDetails}>
											<h2 style={{ marginTop: "0.5rem" }}>
												{user.userId.name}
											</h2>
											<p style={{ fontStyle: "italic" }}>
												@{user.userId.username}
											</p>
										</div>
									</div>
								))}
					</div>
				</div>
			</DashboardLayout>
		</UserLayout>
	);
}

export default Discover;

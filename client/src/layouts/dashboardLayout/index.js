import { useRouter } from "next/router";
import style from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setIsTokenThere } from "@/config/redux/reducer/authReducer";
import { getAllUsers, getUserData } from "@/config/redux/action/authAction";

function DashboardLayout({ children }) {
	const router = useRouter();
	const authState = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			router.push("/login");
		}
		dispatch(setIsTokenThere());
		if (!authState.all_profiles_fetched) {
			dispatch(getAllUsers());
		}
	}, []);
	useEffect(() => {
		dispatch(getUserData());
	}, [authState.isTokenThere]);
	return (
		<div className={style.container}>
			<div className={style.home_container}>
				<div
					onClick={() => router.push("/dashboard")}
					className={style.home_leftContainer}
				>
					<div className={style.sidebar}>
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
								d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
						<p>Home</p>
					</div>
					<div
						onClick={() => router.push("/discover")}
						className={style.sidebar}
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
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>

						<p>Discover</p>
					</div>
					<div
						onClick={() => router.push("/my_connections")}
						className={style.sidebar}
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
								d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
							/>
						</svg>

						<p>My Connections</p>
					</div>
				</div>
				<div className={style.feed_container}>{children}</div>
				<div className={style.extra_container}>
					<h3>Top Profiles</h3>
					{authState.all_profiles_fetched &&
						authState.all_users.map((profile, index) => (
							<div
								onClick={() => {
									router.push(`/view_profile/${profile.userId.username}`);
								}}
								key={index}
								style={{ margin: "1rem", cursor: "pointer" }}
								className={style.extra_item}
							>
								<p>{profile.userId?.name}</p>
							</div>
						))}
				</div>
				<div className={style.mobileNavbar}>
					<div
						onClick={() => router.push("/dashboard")}
						className={style.mobileNavbarSingleItem}
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
								d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
					</div>
					<div
						onClick={() => router.push("/discover")}
						className={style.mobileNavbarSingleItem}
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
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</div>
					<div
						onClick={() => router.push("/my_connections")}
						className={style.mobileNavbarSingleItem}
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
								d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardLayout;
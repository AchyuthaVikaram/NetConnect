import UserLayout from "@/layouts/userLayout";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { registerUser, loginUser } from "@/config/redux/action/authAction"; // Added loginUser
import { emptyMessage } from "@/config/redux/reducer/authReducer";

export default function AuthForm() {
	const authState = useSelector((state) => state.auth);
	const router = useRouter();
	const dispatch = useDispatch();
	const [isLggedIn, setIsLggedIn] = useState(false); // Toggles between login and register
	const [inpObj, setInpObj] = useState({
		username: "",
		password: "",
		email: "",
		name: "",
	});

	useEffect(() => {
		if (authState.loggedIn) {
			router.push("/dashboard");
		}
	}, [authState.loggedIn, router]);
	useEffect(() => {
		dispatch(emptyMessage());
	}, [isLggedIn]);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			router.push("/dashboard");
		}
	}, []);

	const handleInpChange = (e) => {
		setInpObj({ ...inpObj, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isLggedIn) {
			// Handle login

			dispatch(loginUser({ email: inpObj.email, password: inpObj.password }));
		} else {
			// Handle registration

			dispatch(registerUser(inpObj));
		}
		setInpObj({
			username: "",
			password: "",
			email: "",
			name: "",
		});
	};

	return (
		<UserLayout>
			<div className={style.container}>
				<div className={style.card_container}>
					<div className={style.card_leftContainer}>
						<p className={style.card_leftHeading}>
							{isLggedIn ? "Sign In" : "Sign Up"}
						</p>
						<span style={{ color: authState.isSuccess ? "red" : "green" }}>
							{authState.message}
						</span>
						<form className={style.form_style} onSubmit={handleSubmit}>
							{!isLggedIn && (
								<>
									<div className={style.input}>
										<input
											type="text"
											placeholder="Name"
											name="name"
											id="name"
											value={inpObj.name}
											onChange={handleInpChange}
											className={style.input_control}
										/>
									</div>
									<div className={style.input}>
										<input
											type="text"
											placeholder="Username"
											name="username"
											id="username"
											value={inpObj.username}
											onChange={handleInpChange}
											className={style.input_control}
										/>
									</div>
								</>
							)}
							<div className={style.input}>
								<input
									type="email"
									placeholder="Email"
									name="email"
									id="email"
									value={inpObj.email}
									onChange={handleInpChange}
									className={style.input_control}
								/>
							</div>
							<div className={style.input}>
								<input
									type="password"
									placeholder="Password"
									name="password"
									id="password"
									value={inpObj.password}
									onChange={handleInpChange}
									className={style.input_control}
								/>
							</div>
							<button type="submit" className={style.submit_button}>
								{isLggedIn ? "Login" : "Register"}
							</button>
						</form>
					</div>
					<div className={style.card_rightContainer}>
						<div
							className={style.toggleButton}
							onClick={() => setIsLggedIn(!isLggedIn)}
						>
							{isLggedIn
								? "Don't have an account? Register here."
								: "Already have an account? Login here."}
						</div>
					</div>
				</div>
			</div>
		</UserLayout>
	);
}

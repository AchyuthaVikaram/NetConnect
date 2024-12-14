import { useRouter } from "next/router";
import style from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/config/redux/reducer/authReducer";
function Navbar() {
	const router = useRouter();
	const dispatch=useDispatch();
	const authState = useSelector((store) => store.auth);
	return (
		<nav className={style.container}>
			<div className={style.leftContainer}>
				<h1 onClick={() => router.push("/")}>NetConnect</h1>
			</div>
			<div className={style.rightContainer}>
				{authState.profileFetched && (
					<div style={{ display: "flex", gap: "10px" }}>
						<p>hey,{authState.user.userId.name}</p>
						<p onClick={()=>{
							router.push("/profile")
						}} style={{fontWeight:"bold",cursor:"pointer"}}>Profile</p>
						<p onClick={()=>{
							localStorage.removeItem("token");
							dispatch(reset());
							router.push("/login");
						}} style={{fontWeight:"bold",cursor:"pointer"}}>Logout</p>
					</div>
				)}

				{!authState.profileFetched && (
					<div onClick={() => router.push("/login")}>Be a Part</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;

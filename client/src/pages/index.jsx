import Head from "next/head";
import { useRouter } from "next/router";
import style from "../styles/Home.module.css";
import UserLayout from "../layouts/userLayout/index";

export default function Home() {
	const router = useRouter();
	return (
		<UserLayout>
			<div className={style.container}>
				<div className={style.mainContainer}>
					<div className={style.mainContainer_left}>
						<h1 className={style.heading}>
							Connect with friends without exggragaration
						</h1>

						<p>A true social media platform ,with stories no blufs</p>
						<button
							className={style.button}
							onClick={() => {
								router.push("/login");
							}}
						>
							Join Now
						</button>
					</div>
					<div className={style.mainContainer_right}>
						<img
							src="https://png.pngtree.com/png-clipart/20230930/original/pngtree-connecting-puzzles-a-story-of-compatibility-professional-relationships-and-friendship-between-png-image_12918596.png"
							alt="img"
							style={{ width: "100%" }}
						/>
					</div>
				</div>
			</div>
		</UserLayout>
	);
}

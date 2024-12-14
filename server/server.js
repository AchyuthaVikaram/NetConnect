import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/post.route.js";
import userRouter from "./routes/user.route.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

app.use(postRouter);
app.use(userRouter);

const start = async () => {
	await mongoose.connect(process.env.MONGO_URL);
	app.listen(9090, () => {
		console.log("server is runnig on port 9090");
	});
};
start();

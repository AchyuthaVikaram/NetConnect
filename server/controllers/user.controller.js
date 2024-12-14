import Profile from "../models/profile.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import PDFDocument from "pdfkit";
import fs from "fs";
import Connection from "../models/connection.model.js";

const convertToPdf = async (userData) => {
	const doc = new PDFDocument();
	const outputPath = crypto.randomBytes(32).toString("hex") + ".pdf";
	const stream = fs.createWriteStream("uploads/" + outputPath);

	doc.pipe(stream);
	doc.image(`uploads/${userData.userId.profilePicture}`, {
		align: "center",
		width: 100, // Set explicit width in pixels
	});
	doc.moveDown(5);
	doc.fontSize(14).text(`Name: ${userData.userId.name}`);
	doc.fontSize(14).text(`UserName: ${userData.userId.username}`);
	doc.fontSize(14).text(`Email: ${userData.userId.email}`);
	doc.fontSize(14).text(`Bio: ${userData.bio}`);
	doc.fontSize(14).text(`Current Position: ${userData.currPost}`);
	doc.fontSize(14).text(`Past Work:`);

	userData.pastWork.map((work) => {
		doc.fontSize(14).text(`Company Name: ${work.company}`);
		doc.fontSize(14).text(`Position: ${work.position}`);
		doc.fontSize(14).text(`Years: ${work.years}`);
	});

	doc.end();
	return outputPath;
};

export const activeCheck = (req, res) => {
	return res.status(200).json({ message: "RprofieUNNING" });
};

export const register = async (req, res) => {
	try {
		const { name, email, password, username } = req.body;

		// Check for missing fields
		if (!name || !email || !password || !username)
			return res.status(400).json({ message: "All fields are mandatory" });

		// Check if the user already exists
		const user = await User.findOne({ email });
		if (user)
			return res
				.status(400)
				.json({ message: "User already registered, please login" });

		// Hash the password and save the user
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			name,
			email,
			password: hashedPassword,
			username,
		});

		await newUser.save();

		// Create and save profile
		const profile = new Profile({
			userId: newUser._id,
		});
		await profile.save();

		return res.status(200).json({ message: "User registered successfully" });
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: "An error occurred" });
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check for missing fields
		if (!email || !password)
			return res.status(400).json({ message: "All fields are required" });

		// Find user by email
		const user = await User.findOne({ email });
		if (!user)
			return res
				.status(404)
				.json({ message: "User not registered, please register first" });

		// Compare passwords
		const match = await bcrypt.compare(password, user.password);
		if (!match) return res.status(400).json({ message: "Invalid credentials" });

		// Generate token and update user
		const token = crypto.randomBytes(32).toString("hex");
		await User.updateOne({ _id: user._id }, { token });

		return res
			.status(200)
			.json({ message: `Welcome back, ${user.name}`, token });
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: "An error occurred" });
	}
};

export const updateProfilePicture = async (req, res) => {
	try {
		const { token } = req.body;
		if (!token) {
			return res.status(400).json({ message: "Token  is required" });
		}
		const user = await User.findOne({ token });
		if (!user) {
			return res.status(400).json({ message: "User  not found" });
		}
		const profilePicture = req.file.path;
		user.profilePicture = profilePicture;
		await user.save();

		return res
			.status(200)
			.json({ message: "Updated Profile Photo Scuccessfully" });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

export const updateUserProfile = async (req, res) => {
	try {
		const { token, ...newUserData } = req.body;
		if (!token) {
			return res.status(400).json({ message: "Token  is required" });
		}
		const user = await User.findOne({ token });
		if (!user) {
			return res.status(400).json({ message: "User  not found" });
		}

		const { username, email, name } = newUserData;
		const existed = await User.findOne({ $or: [{ username }, { email }] });
		if (existed) {
			if (String(existed._id) !== user._id)
				return res.status(400).json({ message: "User already exits" });
		}
		if (username) user.username = username;
		if (email) user.email = email;
		if (name) user.name = name;

		// Object.assign(user,newUserData);
		await user.save();

		return res.status(200).json({ message: "User Information Updated" });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

export const getUserAndProfile = async (req, res) => {
	try {
		const { token } = req.query;
		// Log the token for debugging
		if (!token) {
			return res.status(400).json({ message: "Token is required" });
		}
		const user = await User.findOne({ token });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}
		const profile = await Profile.findOne({ userId: user._id }).populate(
			"userId"
		);
		return res
			.status(200)
			.json({ profile, message: "Profile fetched successfully" });
	} catch (e) {
		console.error(e.message); // Log the error for debugging
		return res.status(500).json({ message: e.message });
	}
};

export const updateProfile = async (req, res) => {
	//try catch e block
	try {
		const { token, ...newProfileData } = req.body;
		if (!token) {
			return res.status(400).json({ message: "Token  is required" });
		}
		const user = await User.findOne({ token });
		if (!user) {
			return res.status(400).json({ message: "User  not found" });
		}

		const profile = await Profile.findOne({ userId: user._id }).populate(
			"userId"
		);

		Object.assign(profile, newProfileData);

		await profile.save();

		return res.status(200).json("Profile Updated");
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

export const getAllUserProfiles = async (req, res) => {
	try {
		const profiles = await Profile.find().populate("userId");
		res.status(200).json({ profiles });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

export const downloadResume = async (req, res) => {
	try {
		const userId = req.query.id;
		const profile = await Profile.findOne({ userId: userId }).populate(
			"userId"
		);
		let outputPath = await convertToPdf(profile);
		return res.json({ outputPath });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

export const sendConnectionRequest = async (req, res) => {
	const { connectionId } = req.body;
	try {
		const connectionUser = await User.findById(connectionId);
		if (!connectionUser) {
			return res.status(401).json({ message: "Connecting user does't found" });
		}
		const senderUser = req.user;
		const existingRequest = await Connection.findOne({
			userId: senderUser._id,
			connectionId,
		});
		if (existingRequest) {
			return res
				.status(401)
				.json({ message: "Connection Request already sent" });
		}
		const connection = new Connection({ userId: senderUser._id, connectionId });
		await connection.save();
		return res.status(200).json({ message: "Request sent" });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

//requests sent by (req.user) i.e sent to others;
export const getMyConnectionRequests = async (req, res) => {
	try {
		const user = req.user;
		const requests = await Connection.find({ userId: user._id }).populate(
			"connectionId"
		);
		res.status(200).json({ requests });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

//requests sent to the user
export const getRequests = async (req, res) => {
	try {
		const user = req.user;
		const requestsRecieved = await Connection.find({
			connectionId: user._id,
		}).populate("userId");
		res.status(200).json({ requestsRecieved });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

//accept or reject connection
export const updateStatusOfConnection = async (req, res) => {
	try {
		const { status, requestId } = req.body;
		const connection = await Connection.findById(requestId);
		if (!connection) {
			return res.status(400).json({ message: "connection not found!" });
		}
		if (status == "accept") {
			connection.status_accepted = true;
		} else {
			connection.status_accepted = false;
		}
		await connection.save();
		return res.json({ message: `connection ${status}` });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
};

export const getUserByUsername = async (req, res) => {
	try {
		const { username } = req.query;

		// Fetch user by username
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Fetch and populate profile data
		const userProfile = await Profile.findOne({ userId: user._id }).populate(
			"userId"
		);
		if (!userProfile) {
			return res.status(404).json({ message: "Profile not found" });
		}

		return res.status(200).json({ profile: userProfile });
	} catch (e) {
		console.error(e);
		return res.status(500).json({ message: e.message });
	}
};

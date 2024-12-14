import User from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
	try {
		const { token } = req.query;
		if (!token) {
			return res.status(400).json({ message: "Token  is required" });
		}
		const user = await User.findOne({ token });
		if (!user) {
			return res.status(400).json({ message: "User  not found" });
		}
        req.user= user;
        next();
	} catch (e) {
		return res.status(400).json({ message: "Invalid token" });
	}
};

export default isAuthenticated;

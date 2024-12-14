import { Router } from "express";
import {
	downloadResume,
	getAllUserProfiles,
	getMyConnectionRequests,
	getRequests,
	getUserAndProfile,
	getUserByUsername,
	login,
	register,
	sendConnectionRequest,
	updateProfile,
	updateProfilePicture,
	updateStatusOfConnection,
	updateUserProfile,
} from "../controllers/user.controller.js";
import multer from "multer";
import { storage } from "../utils/configCloud.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
const upload = multer({ storage });

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router
	.route("/update_profile_picture")
	.post(upload.single("profilePicture"), updateProfilePicture);
router.route("/user_update").post(updateUserProfile);
router.route("/get_user_and_profile").get(getUserAndProfile);
router.route("/update_profile_data").post(updateProfile);
router.route("/user/get_all_users").get(getAllUserProfiles);
router.route("/user/download_resume").get(downloadResume);
router
	.route("/user/send_connection_request")
	.post(isAuthenticated, sendConnectionRequest);
router
	.route("/user/sent_conntection_requests")
	.get(isAuthenticated, getMyConnectionRequests);
router
	.route("/user/recieved_connection_requests")
	.get(isAuthenticated, getRequests);
router
	.route("/user/update_status")
	.post(isAuthenticated, updateStatusOfConnection);

router.route("/get/user_by_name").get(getUserByUsername);
export default router;

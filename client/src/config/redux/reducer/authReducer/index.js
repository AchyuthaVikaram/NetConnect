import { createSlice } from "@reduxjs/toolkit";
import {
	getAllUsers,
	getReceivedConnections,
	getUserData,
	loginUser,
	registerUser,
	senttConnectionRequests,
} from "../../action/authAction";
import { act } from "react";

const initialState = {
	user: [],
	isError: false,
	isLoading: false,
	isSuccess: false,
	loggedIn: false,
	profileFetched: false,
	isTokenThere: false,
	message: "",
	connections: [],
	connectionRequest: [],
	all_users: [],
	all_profiles_fetched: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: () => initialState,
		handleLoginUser: (state) => (state.message = "hello"),
		emptyMessage: (state) => {
			state.message = "";
		},
		setIsTokenThere: (state) => {
			state.isTokenThere = true;
		},
		setIsTokenNotThere: (state) => {
			state.isTokenThere = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
				state.message = "Knocking the door";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isSuccess = true;
				state.isLoading = false;
				state.isError = false;
				state.loggedIn = true;
				state.message = "log in is Successful";
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.loggedIn = false;
				state.message = action.payload;
			})
			.addCase(registerUser.pending, (state) => {
				state.message = "registering you...";
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.isSuccess = true;
				state.isLoading = false;
				state.isError = false;
				state.loggedIn = true;
				state.message = "Registration is Successful";
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.loggedIn = false;
				state.message = action.payload;
			})
			.addCase(getUserData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.profileFetched = true;
				state.user = action.payload.profile; // Assuming `profile` contains user details
				state.message = action.payload.message; // Fetch success message
			})
			.addCase(getUserData.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload; // Display error message
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.all_profiles_fetched = true;
				state.all_users = action.payload.profiles;
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.all_profiles_fetched = false;
				state.message = action.payload;
			})
			.addCase(senttConnectionRequests.fulfilled, (state, action) => {
				state.isError = false;
				state.connections = action.payload.requests;
			})
			.addCase(senttConnectionRequests.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getReceivedConnections.fulfilled, (state, action) => {
				state.connectionRequest = action.payload.requestsRecieved;
			})
			.addCase(getReceivedConnections.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const {
	reset,
	handleLoginUser,
	emptyMessage,
	setIsTokenNotThere,
	setIsTokenThere,
} = authSlice.actions;
export default authSlice.reducer;

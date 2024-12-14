import { createServer } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
	"user/login",
	async (user, thunkApi) => {
		try {
			const response = await createServer.post("/login", {
				email: user.email,
				password: user.password,
			});
			if (response.data.token) {
				localStorage.setItem("token", response.data.token);
			} else {
				return thunkApi.rejectWithValue({ message: "token not provided" });
			}
			return thunkApi.fulfillWithValue(response.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

export const registerUser = createAsyncThunk(
	"user/register",
	async (user, thunkApi) => {
		try {
			const response = await createServer.post("/register", {
				username: user.username,
				name: user.name,
				email: user.email,
				password: user.password,
			});
			return thunkApi.fulfillWithValue(response.data.message);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

export const getUserData = createAsyncThunk(
	"user/getuserdata",
	async (_, thunkApi) => {
		try {
			const res = await createServer.get("/get_user_and_profile", {
				params: {
					token: localStorage.getItem("token"),
				},
			});
			return thunkApi.fulfillWithValue(res.data); // Return the response data
		} catch (e) {
			console.error(e.response?.data?.message); // Log error for debugging
			return thunkApi.rejectWithValue(
				e.response?.data?.message || "Error fetching data"
			);
		}
	}
);

export const getAllUsers = createAsyncThunk(
	"user/getallusers",
	async (_, thunkApi) => {
		try {
			const response = await createServer.get("/user/get_all_users");
			return thunkApi.fulfillWithValue(response.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

export const sendConnectionRequest = createAsyncThunk(
	"user/sendconnectionrequest",
	async (connectionId, thunkApi) => {
		try {
			const response = await createServer.post(
				"/user/send_connection_request",
				{
					connectionId,
				},
				{
					params: {
						token: localStorage.getItem("token"),
					},
				}
			);

			thunkApi.dispatch(senttConnectionRequests());
			return thunkApi.fulfillWithValue(response.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

//conecttion requtests sent
export const senttConnectionRequests = createAsyncThunk(
	"user/sentconntectionrequests",
	async (_, thunkApi) => {
		try {
			const response = await createServer.get(
				"/user/sent_conntection_requests",
				{
					params: {
						token: localStorage.getItem("token"),
					},
				}
			);
			return thunkApi.fulfillWithValue(response.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);
//connection requests recieved
export const getReceivedConnections = createAsyncThunk(
	"user/getreceivedconnections",
	async (_, thunkApi) => {
		try {
			const response = await createServer.get(
				"/user/recieved_connection_requests",
				{
					params: {
						token: localStorage.getItem("token"),
					},
				}
			);
			return thunkApi.fulfillWithValue(response.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

//status of  connection request
export const updateStatusOfConnection = createAsyncThunk(
	"user/updatestatusofconnection",
	async (data, thunkApi) => {
		try {
			const response = await createServer.post(
				"/user/update_status",
				{
					status: data.status,
					requestId: data.requestId,
				},
				{
					params: {
						token: localStorage.getItem("token"),
					},
				}
			);
			return thunkApi.fulfillWithValue(response.data);
		} catch (e) {
			return thunkApi.rejectWithValue(e.response.data.message);
		}
	}
);

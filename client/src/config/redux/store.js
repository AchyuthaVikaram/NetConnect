import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer";
import postReducer from "./reducer/postReducer";

//steps
//
//submit action
//handle action in its reducer
//register reducer here


const store =  configureStore({
	reducer: {
		auth:authReducer,
		posts:postReducer,
	}
});

export default store;

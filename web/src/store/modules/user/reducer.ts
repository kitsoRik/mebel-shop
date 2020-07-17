import { createReducer } from "@reduxjs/toolkit";
import { authCreator, signInCreator } from "./actions";
import { UserState } from "./types";

const initialState: UserState = {
	data: null,
	dataLoading: true,
};

const userReducer = createReducer(initialState, {
	[authCreator.fulfilled.type]: (state, action) => {
		return { ...state, data: null, dataLoading: true };
	},
	[authCreator.fulfilled.type]: (state, action) => {
		return { ...state, data: action.payload.user, dataLoading: false };
	},
	[signInCreator.fulfilled.type]: (state, action) => {
		console.log(action);
		return {
			...state,
			data: action.payload.user,
		};
	},
});

export default userReducer;

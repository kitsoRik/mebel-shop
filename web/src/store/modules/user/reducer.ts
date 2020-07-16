import { createReducer } from "@reduxjs/toolkit";
import { getUserDataAction } from "./actions";
import { UserState } from "./types";

const initialState: UserState = {
	data: null,
};

const userReducer = createReducer(initialState, {
	[getUserDataAction.pending.type]: (state, action: any) => {
		console.log(action);
		return {
			data: { id: "" },
		};
	},
	[getUserDataAction.fulfilled.type]: (state, action: any) => {
		console.log(action);
		return {
			data: { id: "" },
		};
	},
});

export default userReducer;

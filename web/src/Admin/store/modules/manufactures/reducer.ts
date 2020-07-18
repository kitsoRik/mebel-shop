import { createReducer } from "@reduxjs/toolkit";
import { addManufactureCreator, getManufacturesCreator } from "./actions";
import { ManufacturesState } from "./types";

const initialState: ManufacturesState = {
	manufactures: [],
	manufacturesNumbers: 0,
};

export const manufacturesReducer = createReducer(initialState, {
	[addManufactureCreator.fulfilled.type]: (state, action) => {
		console.log(action);
		return {
			...state,
			manufactures: [...state.manufactures, action.payload.manufacture],
			manufacturesNumbers: state.manufacturesNumbers + 1,
		};
	},

	[getManufacturesCreator.fulfilled.type]: (state, action) => {
		return {
			...state,
			manufactures: action.payload.manufactures,
			manufacturesNumbers: action.payload.count,
		};
	},
});

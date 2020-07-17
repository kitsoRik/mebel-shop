import { createReducer } from "@reduxjs/toolkit";
import { addManufactureCreator, getManufacturesCreator } from "./actions";
import { ManufacturesState } from "./types";

const initialState: ManufacturesState = {
	manufactures: [],
	manufacturesNumbers: 0,
};

export const manufacturesReducer = createReducer(initialState, {
	[addManufactureCreator.fulfilled.type]: (state, action) => {
		return {
			...state,
		};
	},

	[getManufacturesCreator.fulfilled.type]: (state, action) => {
		return {
			...state,
			manufactures: action.payload.manufactures,
			manufacturesCount: action.payload.count,
		};
	},
});

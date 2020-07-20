import { createReducer } from "@reduxjs/toolkit";
import {
	addManufactureCreator,
	getManufactureCreator,
	getManufacturesCreator,
	saveManufactureCreator,
} from "./actions";
import { Manufacture, ManufacturesState } from "./types";

const initialState: ManufacturesState = {
	manufactures: {},
	manufacturesNumbers: 0,
};

export const manufacturesReducer = createReducer(initialState, {
	[addManufactureCreator.fulfilled.type]: (state, action) => {
		const { manufacture } = action.payload;
		return {
			...state,
			manufactures: {
				...state.manufactures,
				[manufacture.id]: manufacture,
			},
			manufacturesNumbers: state.manufacturesNumbers + 1,
		};
	},

	[getManufacturesCreator.fulfilled.type]: (state, action) => {
		return {
			...state,
			manufactures: action.payload.manufactures.reduce(
				(p: object, c: Manufacture) => ({ ...p, [c.id]: c }),
				{}
			),
			manufacturesNumbers: action.payload.count,
		};
	},

	[getManufactureCreator.fulfilled.type]: (state, action) => {
		const { manufacture } = action.payload;

		const old = state.manufactures[manufacture.id];

		if (JSON.stringify(old) === JSON.stringify(manufacture)) return state;

		return {
			...state,
			manufactures: {
				...state.manufactures,
				[manufacture.id]: manufacture,
			},
		};
	},

	[saveManufactureCreator.fulfilled.type]: (state, action) => {
		const { manufacture } = action.payload;

		return {
			...state,
			manufactures: {
				...state.manufactures,
				[manufacture.id]: manufacture,
			},
		};
	},
});

import { createReducer } from "@reduxjs/toolkit";
import { addBedCreator, AddBedFullfiledAction } from "./actions/addBed";
import { getBedCreator } from "./actions/getBed";
import { getBedsCreator, GetBedsFullfiledAction } from "./actions/getBeds";
import { GetBedFullfiledAction } from "./actions/getBed";
import { saveBedCreator } from "./actions/saveBed";
import { BedsState } from "./types";
import { Bed } from "@mebel-shop/data-objects";

const initialState: BedsState = {
	beds: {},
	pages: {},
	bedsNumbers: 0
};

export const bedsReducer = createReducer(initialState, {
	[addBedCreator.fulfilled.type]: (state, action: AddBedFullfiledAction) => {
		const { bed, bedsNumbers } = action.payload;
		return {
			...state,
			beds: {
				...state.beds,
				[bed.id]: bed
			},
			bedsNumbers: bedsNumbers + 1
		};
	},
	[getBedsCreator.fulfilled.type]: (
		state,
		action: GetBedsFullfiledAction
	) => {
		const { page } = action.meta.arg;
		const { beds } = action.payload;
		return {
			...state,
			pages: { ...state.pages, [page]: beds.map((s: any) => s.id) },
			beds: beds.reduce((p: object, c: Bed) => ({ ...p, [c.id]: c }), {}),
			bedsNumbers: action.payload.count
		};
	},
	[getBedCreator.fulfilled.type]: (state, action: GetBedFullfiledAction) => {
		const { bed } = action.payload;

		return {
			...state,
			beds: {
				...state.beds,
				[bed.id]: bed
			}
		};
	},
	[saveBedCreator.fulfilled.type]: (state, action) => {
		const { bed } = action.payload;
		console.log(action.payload);
		return {
			...state,
			beds: {
				...state.beds,
				[bed.id]: bed
			}
		};
	}
});

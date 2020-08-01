import { createReducer } from "@reduxjs/toolkit";
import { getBedsCreator, GetBedsFullfiledAction } from "./actions";
import { BedsState } from "./types";

const bedsState: BedsState = {
	beds: {},
	pages: {},
	bedsNumbers: 0
};

const bedsReducer = createReducer(bedsState, {
	[getBedsCreator.fulfilled.type]: (
		state,
		action: GetBedsFullfiledAction
	) => {
		const { page } = action.meta.arg;
		const { beds, count } = action.payload;
		console.log(beds, 1);
		return {
			...state,
			pages: { ...state.pages, [page]: beds.map((s) => s.id) },
			bedsNumbers: count,
			beds: {
				...state.beds,
				...beds.reduce((p, bed) => ({ ...p, [bed.id]: bed }), {})
			}
		};
	}
});

export default bedsReducer;

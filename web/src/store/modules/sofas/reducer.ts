import { createReducer } from "@reduxjs/toolkit";
import { getSofasCreator, GetSofasFullfiledAction } from "./actions";
import { SofasState } from "./types";

const sofasState: SofasState = {
	sofas: {},
	pages: {},
	sofasNumbers: 0
};

const sofasReducer = createReducer(sofasState, {
	[getSofasCreator.fulfilled.type]: (
		state,
		action: GetSofasFullfiledAction
	) => {
		const { page } = action.meta.arg;
		const { sofas, count } = action.payload;
		return {
			...state,
			pages: { ...state.pages, [page]: sofas.map((s) => s.id) },
			sofasNumbers: count,
			sofas: {
				...state.sofas,
				...sofas.reduce((p, sofa) => ({ ...p, [sofa.id]: sofa }), {})
			}
		};
	}
});

export default sofasReducer;

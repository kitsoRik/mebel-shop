import { createReducer } from "@reduxjs/toolkit";
import { getSofasCreator, GetSofasFullfiledAction } from "./actions";
import { SofasState } from "./types";

const sofasState: SofasState = {
	sofas: {},
	sofasNumbers: 0,
};

const sofasReducer = createReducer(sofasState, {
	[getSofasCreator.fulfilled.type]: (
		state,
		action: GetSofasFullfiledAction
	) => {
		const { sofas } = action.payload;
		return {
			...state,
			sofas: {
				...state.sofas,
				...sofas.reduce((p, sofa) => ({ ...p, [sofa.id]: sofa }), {}),
			},
		};
	},
});

export default sofasReducer;

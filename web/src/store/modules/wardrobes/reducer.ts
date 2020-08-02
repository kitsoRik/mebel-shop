import { createReducer } from "@reduxjs/toolkit";
import { getWardrobesCreator, GetWardrobesFullfiledAction } from "./actions";
import { WardrobesState } from "./types";

const wardrobesState: WardrobesState = {
	wardrobes: {},
	pages: {},
	wardrobesNumbers: 0
};

const wardrobesReducer = createReducer(wardrobesState, {
	[getWardrobesCreator.fulfilled.type]: (
		state,
		action: GetWardrobesFullfiledAction
	) => {
		const { page } = action.meta.arg;
		const { wardrobes, count } = action.payload;
		return {
			...state,
			pages: { ...state.pages, [page]: wardrobes.map((s) => s.id) },
			wardrobesNumbers: count,
			wardrobes: {
				...state.wardrobes,
				...wardrobes.reduce(
					(p, wardrobe) => ({ ...p, [wardrobe.id]: wardrobe }),
					{}
				)
			}
		};
	}
});

export default wardrobesReducer;

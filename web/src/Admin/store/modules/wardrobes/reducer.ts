import { createReducer } from "@reduxjs/toolkit";
import {
	addWardrobeCreator,
	AddWardrobeFullfiledAction
} from "./actions/addWardrobe";
import { getWardrobeCreator } from "./actions/getWardrobe";
import {
	getWardrobesCreator,
	GetWardrobesFullfiledAction
} from "./actions/getWardrobes";
import { GetWardrobeFullfiledAction } from "./actions/getWardrobe";
import { saveWardrobeCreator } from "./actions/saveWardrobe";
import { WardrobesState } from "./types";
import { Wardrobe } from "@mebel-shop/data-objects";

const initialState: WardrobesState = {
	wardrobes: {},
	pages: {},
	wardrobesNumbers: 0
};

export const wardrobesReducer = createReducer(initialState, {
	[addWardrobeCreator.fulfilled.type]: (
		state,
		action: AddWardrobeFullfiledAction
	) => {
		const { wardrobe, wardrobesNumbers } = action.payload;
		return {
			...state,
			wardrobes: {
				...state.wardrobes,
				[wardrobe.id]: wardrobe
			},
			wardrobesNumbers: wardrobesNumbers + 1
		};
	},
	[getWardrobesCreator.fulfilled.type]: (
		state,
		action: GetWardrobesFullfiledAction
	) => {
		const { page } = action.meta.arg;
		const { wardrobes } = action.payload;
		return {
			...state,
			pages: { ...state.pages, [page]: wardrobes.map((s: any) => s.id) },
			wardrobes: wardrobes.reduce(
				(p: object, c: Wardrobe) => ({ ...p, [c.id]: c }),
				{}
			),
			wardrobesNumbers: action.payload.count
		};
	},
	[getWardrobeCreator.fulfilled.type]: (
		state,
		action: GetWardrobeFullfiledAction
	) => {
		const { wardrobe } = action.payload;

		return {
			...state,
			wardrobes: {
				...state.wardrobes,
				[wardrobe.id]: wardrobe
			}
		};
	},
	[saveWardrobeCreator.fulfilled.type]: (state, action) => {
		const { wardrobe } = action.payload;
		console.log(action.payload);
		return {
			...state,
			wardrobes: {
				...state.wardrobes,
				[wardrobe.id]: wardrobe
			}
		};
	}
});

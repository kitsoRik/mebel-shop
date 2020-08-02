import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Wardrobe } from "@mebel-shop/data-objects";

export interface GetWardrobeFullfiledAction {
	payload: {
		wardrobe: Wardrobe;
	};
}

export const getWardrobeCreator = createAsyncThunk(
	"admin/wardrobe/GET_SOFA",
	async ({ id }: { id: number }) => {
		const { wardrobe } = await adminApi.wardrobes.getWardrobe(id);

		return { wardrobe };
	}
);

export const getWardrobe = (id: number) => {
	return getWardrobeCreator({ id });
};

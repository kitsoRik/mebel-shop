import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Wardrobe } from "@mebel-shop/data-objects";

interface IAddWardrobe {
	wardrobe: Wardrobe;
	photos: File[];
}

export interface AddWardrobeFullfiledAction {
	payload: {
		wardrobe: Wardrobe;
		wardrobesNumbers: number;
	};
}

export const addWardrobeCreator = createAsyncThunk(
	"admin/wardrobes/ADD_SOFA",
	async ({ wardrobe, photos }: IAddWardrobe) => {
		const { wardrobe: newWardrobe } = await adminApi.wardrobes.addWardrobe(
			// @ts-ignore
			wardrobe.manufactureId,
			wardrobe.name,
			wardrobe.price,
			wardrobe.description,
			wardrobe.characteristics!,
			photos
		);
		return { wardrobe: newWardrobe };
	}
);

export const addWardrobe = (wardrobe: Wardrobe, photos: File[]) => {
	return addWardrobeCreator({ wardrobe, photos });
};

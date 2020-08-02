import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Wardrobe } from "@mebel-shop/data-objects";

export const saveWardrobeCreator = createAsyncThunk(
	"admin/wardrobes/SAVE_SOFA",
	async (
		{
			wardrobe,
			photos,
			removedPhotos
		}: {
			wardrobe: Wardrobe;
			photos: (File | string)[];
			removedPhotos: string[];
		},
		{ rejectWithValue }
	) => {
		const { wardrobe: newWardrobe } = await adminApi.wardrobes.saveWardrobe(
			wardrobe.id,
			// @ts-ignore
			wardrobe.manufactureId,
			wardrobe.name,
			wardrobe.price,
			wardrobe.description,
			wardrobe.characteristics!,
			photos,
			removedPhotos
		);

		if (!newWardrobe) return rejectWithValue({});

		return { wardrobe: newWardrobe };
	}
);

export const saveWardrobe = (
	wardrobe: Wardrobe,
	photos: (File | string)[],
	removedPhotos: string[]
) => {
	return saveWardrobeCreator({ wardrobe, photos, removedPhotos });
};

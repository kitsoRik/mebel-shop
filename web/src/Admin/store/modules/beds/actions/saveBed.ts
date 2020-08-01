import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Bed } from "@mebel-shop/data-objects";

export const saveBedCreator = createAsyncThunk(
	"admin/beds/SAVE_SOFA",
	async (
		{
			bed,
			photos,
			removedPhotos
		}: {
			bed: Bed;
			photos: (File | string)[];
			removedPhotos: string[];
		},
		{ rejectWithValue }
	) => {
		const { bed: newBed } = await adminApi.beds.saveBed(
			bed.id,
			// @ts-ignore
			bed.manufactureId,
			bed.name,
			bed.price,
			bed.description,
			bed.characteristics!,
			photos,
			removedPhotos
		);

		if (!newBed) return rejectWithValue({});

		return { bed: newBed };
	}
);

export const saveBed = (
	bed: Bed,
	photos: (File | string)[],
	removedPhotos: string[]
) => {
	return saveBedCreator({ bed, photos, removedPhotos });
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Sofa } from "@mebel-shop/data-objects";

export const saveSofaCreator = createAsyncThunk(
	"admin/sofas/SAVE_SOFA",
	async (
		{
			sofa,
			photos,
			removedPhotos
		}: {
			sofa: Sofa;
			photos: (File | string)[];
			removedPhotos: string[];
		},
		{ rejectWithValue }
	) => {
		const { sofa: newSofa } = await adminApi.sofas.saveSofa(
			sofa.id,
			// @ts-ignore
			sofa.manufactureId,
			sofa.name,
			sofa.price,
			sofa.description,
			sofa.characteristics!,
			photos,
			removedPhotos
		);

		if (!newSofa) return rejectWithValue({});

		return { sofa: newSofa };
	}
);

export const saveSofa = (
	sofa: Sofa,
	photos: (File | string)[],
	removedPhotos: string[]
) => {
	return saveSofaCreator({ sofa, photos, removedPhotos });
};

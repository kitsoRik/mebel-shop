import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";

export const saveSofaCreator = createAsyncThunk(
	"sofas/SAVE_SOFA",
	async (
		{
			id,
			manufacture,
			name,
			photos,
			removedPhotos
		}: {
			id: number;
			manufacture: number;
			name: string;
			photos: (File | string)[];
			removedPhotos: string[];
		},
		{ rejectWithValue }
	) => {
		const { sofa } = await adminApi.sofas.saveSofa(
			id,
			manufacture,
			name,
			photos,
			removedPhotos
		);

		if (!sofa) return rejectWithValue({});

		return { sofa };
	}
);

export const saveSofa = (
	id: number,
	manufacture: number,
	name: string,
	photos: (File | string)[],
	removedPhotos: string[]
) => {
	return saveSofaCreator({ id, manufacture, name, photos, removedPhotos });
};

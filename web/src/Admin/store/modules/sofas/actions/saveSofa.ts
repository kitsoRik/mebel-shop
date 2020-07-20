import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";

export const saveSofaCreator = createAsyncThunk(
	"sofas/SAVE_SOFA",
	async ({ id, name }: { id: number; name: string }, { rejectWithValue }) => {
		const { sofa } = await adminApi.sofas.saveSofa(id, name);

		if (!sofa) return rejectWithValue({});

		return { sofa };
	}
);

export const saveSofa = (id: number, name: string) => {
	return saveSofaCreator({ id, name });
};

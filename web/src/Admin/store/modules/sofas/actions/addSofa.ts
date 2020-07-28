import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Sofa } from "../types";

interface IAddSofa {
	manufactureId: number;
	name: string;
	photos: File[];
}

export interface AddSofaFullfiledAction {
	payload: {
		sofa: Sofa;
		sofasNumbers: number;
	};
}

export const addSofaCreator = createAsyncThunk(
	"sofas/ADD_SOFA",
	async ({ manufactureId, name, photos }: IAddSofa) => {
		console.log(photos);
		const { sofa } = await adminApi.sofas.addSofa(
			manufactureId,
			name,
			photos
		);
		return { sofa };
	}
);

export const addSofa = (
	manufactureId: number,
	name: string,
	photos: File[]
) => {
	return addSofaCreator({ manufactureId, name, photos });
};

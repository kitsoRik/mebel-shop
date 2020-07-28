import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Sofa } from "@mebel-shop/data-objects";

interface IAddSofa {
	sofa: Sofa;
	photos: File[];
}

export interface AddSofaFullfiledAction {
	payload: {
		sofa: Sofa;
		sofasNumbers: number;
	};
}

export const addSofaCreator = createAsyncThunk(
	"admin/sofas/ADD_SOFA",
	async ({ sofa, photos }: IAddSofa) => {
		const { sofa: newSofa } = await adminApi.sofas.addSofa(
			// @ts-ignore
			sofa.manufactureId,
			sofa.name,
			sofa.price,
			sofa.description,
			sofa.characteristics,
			photos
		);
		return { sofa: newSofa };
	}
);

export const addSofa = (sofa: Sofa, photos: File[]) => {
	return addSofaCreator({ sofa, photos });
};

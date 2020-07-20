import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Sofa } from "../types";

interface IAddSofa {
	name: string;
}

export interface AddSofaFullfiledAction {
	payload: {
		sofa: Sofa;
		sofasNumbers: number;
	};
}

export const addSofaCreator = createAsyncThunk(
	"sofas/ADD_SOFA",
	async ({ name }: IAddSofa) => {
		const { sofa } = await adminApi.sofas.addSofa(name);

		return { sofa };
	}
);

export const addSofa = (name: string) => {
	return addSofaCreator({ name });
};

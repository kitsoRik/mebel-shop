import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Sofa } from "../types";

interface IGetSofas {
	page: number;
	limit: number;
}

export interface GetSofasFullfiledAction {
	payload: {
		sofa: Sofa;
		sofasNumbers: number;
	};
}

export const getSofasCreator = createAsyncThunk(
	"sofas/GET_SOFAS",
	async ({ page, limit }: IGetSofas) => {
		const { sofas, count } = await adminApi.sofas.getSofas(
			(page - 1) * page,
			limit
		);

		return { sofas, count };
	}
);

export const getSofas = (page: number, limit: number = 10) => {
	return getSofasCreator({ page, limit });
};

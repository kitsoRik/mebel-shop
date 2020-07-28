import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Sofa } from "../types";

export type SofasFilter = {
	name?: string;
	manufacture?: number;
};

interface IGetSofas {
	page: number;
	filter: SofasFilter;
	limit: number;
}

export interface GetSofasFullfiledAction {
	meta: {
		arg: {
			page: number;
		};
	};
	payload: {
		sofas: Sofa[];
		count: number;
	};
}

export const getSofasCreator = createAsyncThunk(
	"sofas/GET_SOFAS",
	async ({ page, filter, limit }: IGetSofas) => {
		const { sofas, count } = await adminApi.sofas.getSofas(
			(page - 1) * limit,
			filter,
			limit
		);

		return { sofas, count };
	}
);

export const getSofas = (
	page: number,
	filter: SofasFilter = {},
	limit: number = 10
) => {
	return getSofasCreator({ page, filter, limit });
};

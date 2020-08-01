import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../providers/api";
import { GetSofasFilter, Sofa } from "@mebel-shop/data-objects";

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
	async ({
		page,
		filter,
		limit
	}: {
		page: number;
		filter: GetSofasFilter;
		limit: number;
	}) => {
		const { sofas, count } = await api.sofas.getSofas(
			(page - 1) * limit,
			filter,
			limit
		);

		return { sofas, count };
	}
);

export const getSofas = (page: number, filter: GetSofasFilter, limit: number) =>
	getSofasCreator({ page, filter, limit });

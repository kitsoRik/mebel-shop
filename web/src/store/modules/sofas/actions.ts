import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../providers/api";
import { Sofa } from "./types";

export interface GetSofasFilter {
	minMaxWeight: number;
	maxMaxWeight: number;
}

export interface GetSofasFullfiledAction {
	meta: {
		arg: {
			page: number;
		};
	};
	payload: {
		sofas: Sofa[];
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
		const { sofas } = await api.sofas.getSofas(
			(page - 1) * limit,
			filter,
			limit
		);

		return { sofas };
	}
);

export const getSofas = (page: number, filter: GetSofasFilter, limit: number) =>
	getSofasCreator({ page, filter, limit });

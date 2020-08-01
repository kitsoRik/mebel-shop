import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../providers/api";
import { GetBedsFilter, Bed } from "@mebel-shop/data-objects";

export interface GetBedsFullfiledAction {
	meta: {
		arg: {
			page: number;
		};
	};
	payload: {
		beds: Bed[];
		count: number;
	};
}

export const getBedsCreator = createAsyncThunk(
	"beds/GET_SOFAS",
	async ({
		page,
		filter,
		limit
	}: {
		page: number;
		filter: GetBedsFilter;
		limit: number;
	}) => {
		const { beds, count } = await api.beds.getBeds(
			(page - 1) * limit,
			filter,
			limit
		);
		return { beds, count };
	}
);

export const getBeds = (page: number, filter: GetBedsFilter, limit: number) =>
	getBedsCreator({ page, filter, limit });

import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Bed } from "@mebel-shop/data-objects";

export type BedsFilter = {
	name?: string;
	manufacture?: number;
};

interface IGetBeds {
	page: number;
	filter: BedsFilter;
	limit: number;
}

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
	"admin/beds/GET_SOFAS",
	async ({ page, filter, limit }: IGetBeds) => {
		const { beds, count } = await adminApi.beds.getBeds(
			(page - 1) * limit,
			filter,
			limit
		);

		return { beds, count };
	}
);

export const getBeds = (
	page: number,
	filter: BedsFilter = {},
	limit: number = 10
) => {
	return getBedsCreator({ page, filter, limit });
};

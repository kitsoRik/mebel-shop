import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Wardrobe } from "@mebel-shop/data-objects";

export type WardrobesFilter = {
	name?: string;
	manufacture?: number;
};

interface IGetWardrobes {
	page: number;
	filter: WardrobesFilter;
	limit: number;
}

export interface GetWardrobesFullfiledAction {
	meta: {
		arg: {
			page: number;
		};
	};
	payload: {
		wardrobes: Wardrobe[];
		count: number;
	};
}

export const getWardrobesCreator = createAsyncThunk(
	"admin/wardrobes/GET_SOFAS",
	async ({ page, filter, limit }: IGetWardrobes) => {
		const { wardrobes, count } = await adminApi.wardrobes.getWardrobes(
			(page - 1) * limit,
			filter,
			limit
		);

		return { wardrobes, count };
	}
);

export const getWardrobes = (
	page: number,
	filter: WardrobesFilter = {},
	limit: number = 10
) => {
	return getWardrobesCreator({ page, filter, limit });
};

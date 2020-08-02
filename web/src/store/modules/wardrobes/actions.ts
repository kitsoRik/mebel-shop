import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../providers/api";
import { GetWardrobesFilter, Wardrobe } from "@mebel-shop/data-objects";

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
	"wardrobes/GET_SOFAS",
	async ({
		page,
		filter,
		limit
	}: {
		page: number;
		filter: GetWardrobesFilter;
		limit: number;
	}) => {
		const { wardrobes, count } = await api.wardrobes.getWardrobes(
			(page - 1) * limit,
			filter,
			limit
		);

		return { wardrobes, count };
	}
);

export const getWardrobes = (
	page: number,
	filter: GetWardrobesFilter,
	limit: number
) => getWardrobesCreator({ page, filter, limit });

import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Bed } from "@mebel-shop/data-objects";

export interface GetBedFullfiledAction {
	payload: {
		bed: Bed;
	};
}

export const getBedCreator = createAsyncThunk(
	"admin/bed/GET_SOFA",
	async ({ id }: { id: number }) => {
		const { bed } = await adminApi.beds.getBed(id);

		return { bed };
	}
);

export const getBed = (id: number) => {
	return getBedCreator({ id });
};

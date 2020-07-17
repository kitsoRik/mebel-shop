import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../providers/api";

export const addManufactureCreator = createAsyncThunk(
	"manufactures/ADD_MANUFACTURE",
	async ({ name }: { name: string }) => {
		const manufacture = await adminApi.manufactures.addManufacture(name);

		return { manufacture };
	}
);

export const getManufacturesCreator = createAsyncThunk(
	"manufactures/GET_MANUFACTURES",
	async ({ page, limit }: { page: number; limit: number }) => {
		const {
			manufactures,
			count,
		} = await adminApi.manufactures.getManufactures(
			(page - 1) * limit,
			limit
		);

		return { manufactures, count };
	}
);

export const addManufacture = (name: string) => {
	return addManufactureCreator({ name });
};

export const getManufactures = (page: number, limit: number = 50) => {
	return getManufacturesCreator({ page, limit });
};

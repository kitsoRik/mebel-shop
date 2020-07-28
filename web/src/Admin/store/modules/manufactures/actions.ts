import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../providers/api";

export const addManufactureCreator = createAsyncThunk(
	"admin/manufactures/ADD_MANUFACTURE",
	async ({ name }: { name: string }) => {
		const manufacture = await adminApi.manufactures.addManufacture(name);

		return { manufacture };
	}
);

export const getManufacturesCreator = createAsyncThunk(
	"admin/manufactures/GET_MANUFACTURES",
	async ({ page, limit }: { page: number; limit: number }) => {
		const {
			manufactures,
			count
		} = await adminApi.manufactures.getManufactures(
			(page - 1) * limit,
			limit
		);

		return { manufactures, count };
	}
);

export const getManufactureCreator = createAsyncThunk(
	"admin/manufactures/GET_MANUFACTURE",
	async ({ id }: { id: number }) => {
		const { manufacture } = await adminApi.manufactures.getManufacture(id);

		return { manufacture };
	}
);

export const saveManufactureCreator = createAsyncThunk(
	"admin/manufactures/SAVE_MANUFACTURE",
	async ({ id, name }: { id: number; name: string }, { rejectWithValue }) => {
		const { manufacture } = await adminApi.manufactures.saveManufacture(
			id,
			name
		);

		if (!manufacture) return rejectWithValue({});

		return { manufacture };
	}
);

export const addManufacture = (name: string) => {
	return addManufactureCreator({ name });
};

export const getManufactures = (page: number, limit: number = 50) => {
	return getManufacturesCreator({ page, limit });
};

export const getManufacture = (id: number) => {
	return getManufactureCreator({ id });
};

export const saveManufacture = (id: number, name: string) => {
	return saveManufactureCreator({ id, name });
};

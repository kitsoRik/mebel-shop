import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../providers/api";
import { ISofa } from "./types";

export interface GetSofasFullfiledAction {
	payload: {
		sofas: ISofa[];
	};
}

export const getSofasCreator = createAsyncThunk(
	"sofas/GET_SOFAS",
	async ({ page, limit }: { page: number; limit: number }) => {
		const { sofas } = await api.sofas.getSofas((page - 1) * limit, limit);

		return { sofas };
	}
);

export const getSofas = (page: number, limit: number) =>
	getSofasCreator({ page, limit });

import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Sofa } from "@mebel-shop/data-objects";

export interface GetSofaFullfiledAction {
	payload: {
		sofa: Sofa;
	};
}

export const getSofaCreator = createAsyncThunk(
	"admin/sofa/GET_SOFA",
	async ({ id }: { id: number }) => {
		const { sofa } = await adminApi.sofas.getSofa(id);

		return { sofa };
	}
);

export const getSofa = (id: number) => {
	return getSofaCreator({ id });
};

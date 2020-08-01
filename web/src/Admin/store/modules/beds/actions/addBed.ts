import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../../providers/api";
import { Bed } from "@mebel-shop/data-objects";

interface IAddBed {
	bed: Bed;
	photos: File[];
}

export interface AddBedFullfiledAction {
	payload: {
		bed: Bed;
		bedsNumbers: number;
	};
}

export const addBedCreator = createAsyncThunk(
	"admin/beds/ADD_SOFA",
	async ({ bed, photos }: IAddBed) => {
		const { bed: newBed } = await adminApi.beds.addBed(
			// @ts-ignore
			bed.manufactureId,
			bed.name,
			bed.price,
			bed.description,
			bed.characteristics!,
			photos
		);
		return { bed: newBed };
	}
);

export const addBed = (bed: Bed, photos: File[]) => {
	return addBedCreator({ bed, photos });
};

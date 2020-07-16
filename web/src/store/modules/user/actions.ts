import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserDataAction = createAsyncThunk(
	"user/GET_USER_DATA",
	async ({ id }: { id: string }) => {
		return { id };
	}
);

export const getUserData = (id: string) => {
	return getUserDataAction({ id });
};

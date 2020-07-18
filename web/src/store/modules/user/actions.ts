import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../../Admin/providers/api";

export const authCreator = createAsyncThunk("user/AUTH", async () => {
	const user = await adminApi.auth.auth();

	return { user };
});

export const signInCreator = createAsyncThunk(
	"user/SIGN_IN",
	async ({
		username,
		password,
		remember,
	}: {
		username: string;
		password: string;
		remember: boolean;
	}) => {
		const user = await adminApi.auth.signIn(username, password, remember);

		return { user };
	}
);

export const signOutCreator = createAsyncThunk("user/SIGN_OUT", async () => {
	adminApi.auth.signOut();

	localStorage.removeItem("accessToken");
});

export const auth = () => authCreator();

export const signIn = (
	username: string,
	password: string,
	remember: boolean
) => {
	return signInCreator({ username, password, remember });
};

export const signOut = () => signOutCreator();

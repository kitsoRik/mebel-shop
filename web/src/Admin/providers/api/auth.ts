import Axios from "axios";
import { post } from "../../../providers/api/api";

export const auth = () => post("/auth");

export const signIn = (
	username: string,
	password: string,
	remember: boolean
) => {
	const response = post("/auth/signIn", { username, password, remember });

	response.then((data) => {
		const { accessToken, user } = data;

		if (accessToken === undefined)
			throw new Error("Access token is not provided");

		if (remember) localStorage.setItem("accessToken", accessToken);
		Axios.defaults.headers.Authorization = `Bearer ${accessToken}`;

		return user;
	});

	return response;
};

export const signOut = () => post("/auth/signOut");

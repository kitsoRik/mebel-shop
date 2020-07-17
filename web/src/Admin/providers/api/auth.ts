import { post } from "../../../providers/api/api";

export const auth = () => post("/auth");

export const signIn = (username: string, password: string, remember: boolean) =>
	post("/auth/signIn", { username, password, remember });

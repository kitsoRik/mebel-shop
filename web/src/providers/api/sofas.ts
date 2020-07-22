import { get } from "./api";

export const getSofas = (offset: number, limit: number) =>
	get("/sofas", { offset, limit });

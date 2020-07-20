import { post, get, put } from "../../../providers/api/api";

export const addManufacture = (name: string) => post("/manufactures", { name });

export const getManufactures = (offset: number, limit: number) =>
	get("/manufactures", { offset, limit });

export const getMinManufactures = (name: string, limit: number) =>
	get("/manufactures/min", { name, limit });

export const getManufacture = (id: number) => get(`/manufactures/${id}`);

export const saveManufacture = (id: number, name: string) =>
	put(`/manufactures/${id}`, { name });

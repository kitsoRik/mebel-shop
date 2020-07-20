import { post, get, put } from "../../../providers/api/api";

export const addSofa = (name: string) => post("/sofas", { name });

export const getSofas = (offset: number, limit: number) =>
	get("/sofas", { offset, limit });

export const getSofa = (id: number) => get("/sofa", { id });

export const saveSofa = (id: number, name: string) =>
	put(`/sofas/${id}`, { name });

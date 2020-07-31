import { get } from "./api";

export const getPopularManufactures = (page: number, limit: number) =>
	get("/manufactures/popular", { offset: (page - 1) * limit, limit });

export const getProducts = (id: number, page: number, limit: number) =>
	get(`/manufactures/${id}/products`, { offset: (page - 1) * limit, limit });

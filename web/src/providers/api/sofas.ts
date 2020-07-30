import { get, baseUrl } from "./api";
import { GetSofasFilter } from "@mebel-shop/data-objects";

export const baseUrlSofas = `${baseUrl}/static/sofas/`;

export const getPopularSofas = (limit: number) =>
	get("/sofas/popular", { limit });

export const getSofas = (
	offset: number,
	filter: GetSofasFilter,
	limit: number
) => get("/sofas", { offset, filter: JSON.stringify(filter), limit });

export const getSofa = (id: number) => get(`/sofas/${id}`);

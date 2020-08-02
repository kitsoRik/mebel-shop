import { get, baseUrl } from "./api";
import { GetWardrobesFilter } from "@mebel-shop/data-objects";

export const baseUrlWardrobes = `${baseUrl}/static/wardrobes/`;

export const getPopularWardrobes = (limit: number) =>
	get("/wardrobes/popular", { limit });

export const getWardrobes = (
	offset: number,
	filter: GetWardrobesFilter,
	limit: number
) => get("/wardrobes", { offset, filter: JSON.stringify(filter), limit });

export const getWardrobe = (id: number) => get(`/wardrobes/${id}`);

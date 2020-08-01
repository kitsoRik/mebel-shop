import { get, baseUrl } from "./api";
import { GetBedsFilter } from "@mebel-shop/data-objects";

export const baseUrlBeds = `${baseUrl}/static/beds/`;

export const getPopularBeds = (limit: number) =>
	get("/beds/popular", { limit });

export const getBeds = (offset: number, filter: GetBedsFilter, limit: number) =>
	get("/beds", { offset, filter: JSON.stringify(filter), limit });

export const getBed = (id: number) => get(`/beds/${id}`);

import { AdminState } from "../..";
import { Bed } from "@mebel-shop/data-objects";

export const selectBedById = (id: number) => ({
	beds: { beds }
}: AdminState): Bed | undefined => beds[id];

export const selectBedsByPage = (page: number) => ({
	beds: { beds, pages }
}: AdminState): Bed[] =>
	Object.keys(beds)
		.filter((k) => (pages[page] ?? []).includes(+k))
		.map((key) => beds[key]);

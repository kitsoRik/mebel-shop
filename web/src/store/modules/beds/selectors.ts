import { RootState } from "../..";
import { Bed } from "@mebel-shop/data-objects";

export const selectBedById = (id: number) => ({
	beds: { beds }
}: RootState): Bed | undefined => beds[id];

export const selectBedsByPage = (page: number) => ({
	beds: { beds, pages }
}: RootState): Bed[] =>
	Object.keys(beds)
		.filter((k) => {
			let pagesAll: number[] = [];

			for (let i = 0; i < page; i++) {
				const current = pages[page] ?? [];
				pagesAll = [...pagesAll, ...current];
			}
			return pagesAll.includes(+k);
		})

		.map((key) => beds[key]);

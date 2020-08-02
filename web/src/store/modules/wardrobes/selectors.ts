import { RootState } from "../..";
import { Wardrobe } from "@mebel-shop/data-objects";

export const selectWardrobeById = (id: number) => ({
	wardrobes: { wardrobes }
}: RootState): Wardrobe | undefined => wardrobes[id];

export const selectWardrobesByPage = (page: number) => ({
	wardrobes: { wardrobes, pages }
}: RootState): Wardrobe[] =>
	Object.keys(wardrobes)
		.filter((k) => {
			let pagesAll: number[] = [];

			for (let i = 0; i < page; i++) {
				const current = pages[page] ?? [];
				pagesAll = [...pagesAll, ...current];
			}
			return pagesAll.includes(+k);
		})

		.map((key) => wardrobes[key]);

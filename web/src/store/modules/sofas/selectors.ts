import { RootState } from "../..";
import { Sofa } from "@mebel-shop/data-objects";

export const selectSofaById = (id: number) => ({
	sofas: { sofas }
}: RootState): Sofa | undefined => sofas[id];

export const selectSofasByPage = (page: number) => ({
	sofas: { sofas, pages }
}: RootState): Sofa[] =>
	Object.keys(sofas)
		.filter((k) => {
			let pagesAll: number[] = [];

			for (let i = 0; i < page; i++) {
				const current = pages[page] ?? [];
				pagesAll = [...pagesAll, ...current];
			}
			return pagesAll.includes(+k);
		})

		.map((key) => sofas[key]);

import { RootState } from "../..";
import { Sofa } from "./types";

export const selectSofaById = (id: number) => ({
	sofas: { sofas }
}: RootState): Sofa | undefined => sofas[id];

export const selectSofasByPage = (page: number) => ({
	sofas: { sofas, pages }
}: RootState): Sofa[] =>
	Object.keys(sofas)
		.filter((k) => (pages[page] ?? []).includes(+k))
		.map((key) => sofas[key]);

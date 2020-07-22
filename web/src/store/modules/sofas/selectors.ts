import { RootState } from "../..";
import { ISofa } from "./types";

export const selectSofaById = (id: number) => ({
	sofas: { sofas },
}: RootState): ISofa | undefined => sofas[id];

export const selectSofasByIds = (ids: number[]) => ({
	sofas: { sofas },
}: RootState): ISofa[] => Object.keys(sofas).map((key) => sofas[key]);

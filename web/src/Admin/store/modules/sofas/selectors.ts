import { AdminState } from "../..";
import { Sofa } from "./types";

export const selectSofaById = (id: number) => ({
	sofas: { sofas },
}: AdminState): Sofa | undefined => sofas[id];

export const selectSofasByIds = (ids: number[]) => ({
	sofas: { sofas },
}: AdminState): Sofa[] => Object.keys(sofas).map((key) => sofas[key]);

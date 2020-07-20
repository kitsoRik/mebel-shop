import { AdminState } from "../..";
import { Manufacture } from "./types";

export const selectManufactureById = (id: number) => ({
	manufactures: { manufactures },
}: AdminState): Manufacture | undefined => manufactures[id];

export const selectManufacturesByIds = (ids: number[]) => ({
	manufactures: { manufactures },
}: AdminState): Manufacture[] =>
	Object.keys(manufactures).map((key) => manufactures[key]);

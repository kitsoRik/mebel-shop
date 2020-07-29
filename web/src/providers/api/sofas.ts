import { get } from "./api";
import { GetSofasFilter } from "../../store/modules/sofas/actions";

export const getSofas = (
	offset: number,
	filter: GetSofasFilter,
	limit: number
) => get("/sofas", { offset, filter: JSON.stringify(filter), limit });

export const getSofa = (id: number) => get(`/sofas/${id}`);

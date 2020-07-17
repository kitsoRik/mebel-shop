import Axios from "axios";
import { post, get } from "../../../providers/api/api";

export const getManufactures = (offset: number, limit: number) =>
	get("/manufactures", { offset, limit });

export const addManufacture = (name: string) => post("/manufactures", { name });

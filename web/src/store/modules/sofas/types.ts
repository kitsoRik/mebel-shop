import { IProduct } from "../../../models/interfaces/Product";
import { Manufacture } from "../../../Admin/store/modules/manufactures/types";

export interface Sofa extends IProduct {
	id: number;
	name: string;
	manufacture: Manufacture;
}

export interface SofasState {
	sofas: { [name: string]: Sofa };
	pages: { [x: number]: number[] };
	sofasNumbers: number;
}

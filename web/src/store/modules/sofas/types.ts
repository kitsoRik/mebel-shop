import { IProduct } from "../../../models/interfaces/Product";

export interface ISofa extends IProduct {
	name: string;
}

export interface SofasState {
	sofas: { [name: string]: ISofa };
	sofasNumbers: number;
}

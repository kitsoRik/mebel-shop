import { Sofa } from "@mebel-shop/data-objects";

export interface SofasState {
	sofas: { [x: string]: Sofa };
	pages: { [x: number]: number[] };
	sofasNumbers: number;
}

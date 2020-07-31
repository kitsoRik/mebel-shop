import { Manufacture } from "../../../Admin/store/modules/manufactures/types";
import { Sofa } from "@mebel-shop/data-objects";

export interface SofasState {
	sofas: { [name: string]: Sofa };
	pages: { [x: number]: number[] };
	sofasNumbers: number;
}

import { Manufacture } from "../../../Admin/store/modules/manufactures/types";
import { Bed } from "@mebel-shop/data-objects";

export interface BedsState {
	beds: { [name: string]: Bed };
	pages: { [x: number]: number[] };
	bedsNumbers: number;
}

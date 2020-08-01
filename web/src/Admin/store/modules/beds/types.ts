import { Bed } from "@mebel-shop/data-objects";

export interface BedsState {
	beds: { [x: string]: Bed };
	pages: { [x: number]: number[] };
	bedsNumbers: number;
}

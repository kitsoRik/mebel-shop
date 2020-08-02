import { Manufacture } from "../../../Admin/store/modules/manufactures/types";
import { Wardrobe } from "@mebel-shop/data-objects";

export interface WardrobesState {
	wardrobes: { [name: string]: Wardrobe };
	pages: { [x: number]: number[] };
	wardrobesNumbers: number;
}

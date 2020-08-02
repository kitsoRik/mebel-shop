import { Wardrobe } from "@mebel-shop/data-objects";

export interface WardrobesState {
	wardrobes: { [x: string]: Wardrobe };
	pages: { [x: number]: number[] };
	wardrobesNumbers: number;
}

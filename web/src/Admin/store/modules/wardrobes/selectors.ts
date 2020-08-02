import { AdminState } from "../..";
import { Wardrobe } from "@mebel-shop/data-objects";

export const selectWardrobeById = (id: number) => ({
	wardrobes: { wardrobes }
}: AdminState): Wardrobe | undefined => wardrobes[id];

export const selectWardrobesByPage = (page: number) => ({
	wardrobes: { wardrobes, pages }
}: AdminState): Wardrobe[] =>
	Object.keys(wardrobes)
		.filter((k) => (pages[page] ?? []).includes(+k))
		.map((key) => wardrobes[key]);

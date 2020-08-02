import { post, get, put } from "../../../providers/api/api";
import { WardrobesFilter } from "../../store/modules/wardrobes/actions/getWardrobes";
import { IWardrobeCharacteristics } from "@mebel-shop/data-objects";

export const addWardrobe = (
	manufactureId: number,
	name: string,
	price: number,
	description: string,
	characteristics: IWardrobeCharacteristics,
	photos: File[]
) => {
	const formData = new FormData();

	formData.set("manufacture", manufactureId.toString());
	formData.set("name", name);
	formData.set("price", price.toString());
	formData.set("description", description);
	formData.set("characteristics", JSON.stringify(characteristics));

	for (let i = 0; i < photos.length; i++) {
		const photo = photos[i];
		formData.append("photos", photo, photo.name);
	}
	return post("/wardrobes", formData, true);
};

export const getWardrobes = (
	offset: number,
	filter: WardrobesFilter,
	limit: number
) => get("/wardrobes", { offset, filterAdmin: JSON.stringify(filter), limit });

export const getWardrobe = (id: number) => get("/wardrobe", { id });

export const saveWardrobe = (
	id: number,
	manufactureId: number,
	name: string,
	price: number,
	description: string,
	characteristics: IWardrobeCharacteristics,
	photos: (string | File)[],
	removedPhotos: string[]
) => {
	const formData = new FormData();

	formData.set("manufactureId", manufactureId.toString());
	formData.set("name", name);
	formData.set("price", price.toString());
	formData.set("description", description);
	formData.set("characteristics", JSON.stringify(characteristics));

	for (let i = 0; i < removedPhotos.length; i++) {
		formData.append("removedPhotos", removedPhotos[i]);
	}

	for (let i = 0; i < photos.length; i++) {
		const photo = photos[i];
		if (typeof photo === "string") {
			formData.append("photos", new Blob([]), "");
		} else formData.append("photos", photo, photo.name);
	}
	return put(`/wardrobes/${id}`, formData, true);
};

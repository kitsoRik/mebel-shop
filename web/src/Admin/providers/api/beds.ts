import { post, get, put } from "../../../providers/api/api";
import { BedsFilter } from "../../store/modules/beds/actions/getBeds";
import { IBedCharacteristics } from "@mebel-shop/data-objects";

export const addBed = (
	manufactureId: number,
	name: string,
	price: number,
	description: string,
	characteristics: IBedCharacteristics,
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
	return post("/beds", formData, true);
};

export const getBeds = (offset: number, filter: BedsFilter, limit: number) =>
	get("/beds", { offset, filterAdmin: JSON.stringify(filter), limit });

export const getBed = (id: number) => get("/bed", { id });

export const saveBed = (
	id: number,
	manufactureId: number,
	name: string,
	price: number,
	description: string,
	characteristics: IBedCharacteristics,
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
	return put(`/beds/${id}`, formData, true);
};

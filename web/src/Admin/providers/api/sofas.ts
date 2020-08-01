import { post, get, put } from "../../../providers/api/api";
import { SofasFilter } from "../../store/modules/sofas/actions/getSofas";
import { ISofaCharacteristics } from "@mebel-shop/data-objects";

export const addSofa = (
	manufactureId: number,
	name: string,
	price: number,
	description: string,
	characteristics: ISofaCharacteristics,
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
	return post("/sofas", formData, true);
};

export const getSofas = (offset: number, filter: SofasFilter, limit: number) =>
	get("/sofas", { offset, filterAdmin: JSON.stringify(filter), limit });

export const getSofa = (id: number) => get("/sofa", { id });

export const saveSofa = (
	id: number,
	manufactureId: number,
	name: string,
	price: number,
	description: string,
	characteristics: ISofaCharacteristics,
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
	return put(`/sofas/${id}`, formData, true);
};

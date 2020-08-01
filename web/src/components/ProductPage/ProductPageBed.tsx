import React, { useState, useEffect } from "react";
import Photo from "./Overview/Photo";
import ProductPage from "./ProductPage";
import { useParams } from "react-router";
import { getBed } from "../../providers/api/beds";
import { Bed } from "@mebel-shop/data-objects";
import { baseUrl } from "../../providers/api/api";

const ProductPageBed = () => {
	const [bed, setBed] = useState<(Bed & { photos: string[] }) | null>(null);

	const { id } = useParams();

	useEffect(() => {
		loadBed(+id);
	}, []);

	const loadBed = async (id: number) => {
		try {
			const bed = await getBed(id);
			setBed(bed);
		} catch (e) {
			console.log(e);
		}
	};

	if (!bed) return null;

	const photos = bed.photos.map((a) => (
		<Photo url={`${baseUrl}/static/beds/photos/${a}`} />
	));

	if (!bed.characteristics) return null;

	const dataSource: string[][] = [
		["Ширина", `${bed.characteristics.width} см`],
		["Висота", `${bed.characteristics.height} см`],
		["Глубина", `${bed.characteristics.depth} см`],
		["Вага", `${bed.characteristics.weight} кг`],
		["Максимальне навантаження", `${bed.characteristics.maxWeight} кг/м2`],
		["Колір", `${bed.characteristics.color}`],
		["Матеріал оббивки", `${bed.characteristics.upholsteryMaterial}`],
		["Максимальне корпусу", `${bed.characteristics.frameMaterial}`],
		["Особливості", `${bed.characteristics.features}`],
		["Гарантія", `${bed.characteristics.guarantee}`]
	];

	return (
		<ProductPage>
			<ProductPage.Overview photos={photos}>
				<ProductPage.Overview.Title text={bed.name} />
				<ProductPage.Overview.Description
					text={bed.description}
					price={bed.price}
				/>
			</ProductPage.Overview>
			<ProductPage.Characteristics
				characteristics={dataSource}
			></ProductPage.Characteristics>
		</ProductPage>
	);
};

export default ProductPageBed;

import React, { useState, useEffect } from "react";
import Photo from "./Overview/Photo";
import ProductPage from "./ProductPage";
import { getWardrobes } from "../../Admin/store/modules/wardrobes/actions/getWardrobes";
import { useParams } from "react-router";
import { getWardrobe } from "../../providers/api/wardrobes";
import { Wardrobe } from "@mebel-shop/data-objects";
import { baseUrl } from "../../providers/api/api";

const ProductPageWardrobe = () => {
	const [wardrobe, setWardrobe] = useState<
		(Wardrobe & { photos: string[] }) | null
	>(null);

	const { id } = useParams();

	useEffect(() => {
		loadWardrobe(+id);
	}, []);

	const loadWardrobe = async (id: number) => {
		try {
			const wardrobe = await getWardrobe(id);
			setWardrobe(wardrobe);
		} catch (e) {
			console.log(e);
		}
	};

	if (!wardrobe) return null;

	const photos = wardrobe.photos.map((a) => (
		<Photo url={`${baseUrl}/static/wardrobes/photos/${a}`} />
	));

	if (!wardrobe.characteristics) return null;

	const dataSource: string[][] = [
		["Ширина", `${wardrobe.characteristics.width} см`],
		["Висота", `${wardrobe.characteristics.height} см`],
		["Глубина", `${wardrobe.characteristics.depth} см`],
		["Вага", `${wardrobe.characteristics.weight} кг`],
		[
			"Максимальне навантаження",
			`${wardrobe.characteristics.maxWeight} кг/м2`
		],
		["Колір", `${wardrobe.characteristics.color}`],
		["Особливості", `${wardrobe.characteristics.features}`],
		["Гарантія", `${wardrobe.characteristics.guarantee}`]
	];

	return (
		<ProductPage>
			<ProductPage.Overview photos={photos}>
				<ProductPage.Overview.Title text={wardrobe.name} />
				<ProductPage.Overview.Description
					text={wardrobe.description}
					price={wardrobe.price}
				/>
			</ProductPage.Overview>
			<ProductPage.Characteristics
				characteristics={dataSource}
			></ProductPage.Characteristics>
		</ProductPage>
	);
};

export default ProductPageWardrobe;

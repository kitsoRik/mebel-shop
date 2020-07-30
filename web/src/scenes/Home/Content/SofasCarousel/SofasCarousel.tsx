import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { getPopularSofas, baseUrlSofas } from "../../../../providers/api/sofas";
import ProductsCarousel from "../../../../components/ProductsCarousel";
import { Sofa } from "@mebel-shop/data-objects";

const SofasCarousel = () => {
	const [sofas, setSofas] = useState<Sofa[]>([]);

	useEffect(() => {
		loadPopularSofas();
	}, []);

	const loadPopularSofas = async () => {
		const sofas = await getPopularSofas(10);
		setSofas(sofas);
	};

	return (
		<div>
			<Typography.Title>Найпопулярніші дивани</Typography.Title>
			<ProductsCarousel
				products={sofas}
				renderProduct={(product: Sofa) => (
					<ProductsCarousel.Item
						title={product.name}
						photoUrl={`${baseUrlSofas}/photos/${product.photos[0]}`}
					/>
				)}
			/>
		</div>
	);
};

export default SofasCarousel;

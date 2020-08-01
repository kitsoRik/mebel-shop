import classes from "./ProductsContainer.module.scss";
import React from "react";
import Product from "../../../../shared/Product";
import { IProduct } from "@mebel-shop/data-objects/dist/Product";
import { useLocationField } from "react-location-query";

interface Props {
	products: IProduct[];
	productPageUrlBase: string;
	photosBaseUrl: string;
}

const ProductsContainer = ({
	products = [],
	photosBaseUrl,
	productPageUrlBase
}: Props) => {
	const [page] = useLocationField("page");

	return (
		<div className={classes.container}>
			{products.map((product) => (
				<Product
					product={product}
					productPageUrlBase={productPageUrlBase}
					photoUrl={`${photosBaseUrl}${product.photos[0]}`}
				/>
			))}
		</div>
	);
};

export default ProductsContainer;

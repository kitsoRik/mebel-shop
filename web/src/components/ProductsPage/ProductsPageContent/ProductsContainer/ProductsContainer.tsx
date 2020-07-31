import classes from "./ProductsContainer.module.scss";
import React from "react";
import Product from "../../../../shared/Product";
import { IProduct } from "@mebel-shop/data-objects/dist/Product";

interface Props {
	products: IProduct[];
	photosBaseUrl: string;
}

const ProductsContainer = ({ products = [], photosBaseUrl }: Props) => {
	return (
		<div className={classes.container}>
			{products.map((product) => (
				<Product
					product={product}
					photoUrl={`${photosBaseUrl}${product.photos[0]}`}
				/>
			))}
		</div>
	);
};

export default ProductsContainer;

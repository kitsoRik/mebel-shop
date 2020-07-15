import classes from "./ProductsContainer.module.scss";
import React from "react";
import { IProduct } from "../../../../models/interfaces/Product";
import Product from "../../../../shared/Product";

interface Props {
	products: IProduct[];
}

const ProductsContainer = ({ products = [] }: Props) => {
	return (
		<div className={classes.container}>
			{products.map((product) => (
				<Product product={product} />
			))}
		</div>
	);
};

export default ProductsContainer;

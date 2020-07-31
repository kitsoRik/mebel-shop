import classes from "./ProductsPageContent.module.scss";
import React from "react";
import ProductsContainer from "./ProductsContainer";
import ProductsPageContentSearchPanel from "./ProductsPageContentSearchPanel/ProductsPageContentSearchPanel";
import { IProduct } from "@mebel-shop/data-objects/dist/Product";

interface Props {
	products: IProduct[];
	photosBaseUrl: string;

	children?: JSX.Element | JSX.Element[];
}

const ProductsPageContent = ({
	products,
	children = [],
	photosBaseUrl
}: Props) => {
	const elements = Array.isArray(children) ? children : [children];

	const searchPanel = elements.filter(
		(e) => e.type === ProductsPageContentSearchPanel
	);

	return (
		<div className={classes.content}>
			{searchPanel}
			<ProductsContainer
				photosBaseUrl={photosBaseUrl}
				products={products}
			/>
		</div>
	);
};

export default ProductsPageContent;

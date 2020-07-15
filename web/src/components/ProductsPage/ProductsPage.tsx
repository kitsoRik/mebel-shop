import React from "react";
import ProductsPageContent from "./ProductsPageContent";
import ProductsPageHeader from "./ProductsPageHeader";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const ProductsPage = ({ children }: Props) => {
	const elements = Array.isArray(children) ? children : [children];
	const header = elements.find((e) => e.type === ProductsPageHeader) ?? null;
	const content =
		elements.find((e) => e.type === ProductsPageContent) ?? null;

	return (
		<div style={{ height: "100%" }}>
			{header}
			{content}
		</div>
	);
};

export default ProductsPage;

import classes from "./ProductsPageContent.module.scss";
import React from "react";
import ProductsContainer from "./ProductsContainer";
import ProductsPageContentSearchPanel from "./ProductsPageContentSearchPanel/ProductsPageContentSearchPanel";
import { IProduct } from "@mebel-shop/data-objects/dist/Product";
import { useLocationField } from "react-location-query";
import { Pagination } from "antd";

interface Props {
	products: IProduct[];
	productPageBaseUrl: string;
	photosBaseUrl: string;

	pagesCount: number;

	children?: JSX.Element | JSX.Element[];
}

const ProductsPageContent = ({
	products,
	children = [],
	productPageBaseUrl,
	photosBaseUrl,
	pagesCount
}: Props) => {
	const elements = Array.isArray(children) ? children : [children];

	const [page, setPage] = useLocationField("page");
	const [limit] = useLocationField("limit");

	const searchPanel = elements.filter(
		(e) => e.type === ProductsPageContentSearchPanel
	);

	return (
		<div className={classes.content}>
			{searchPanel}
			<div className={classes.container}>
				<ProductsContainer
					productPageUrlBase={productPageBaseUrl}
					photosBaseUrl={photosBaseUrl}
					products={products}
				/>

				<Pagination
					className={classes.pagination}
					pageSize={limit}
					current={page}
					onChange={(page) => setPage(page)}
					total={pagesCount * limit}
				/>
			</div>
		</div>
	);
};

export default ProductsPageContent;

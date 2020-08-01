import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductsPage from "../../../components/ProductsPage";
import ProductsPageHeader from "../../../components/ProductsPage/ProductsPageHeader";
import ProductsPageContent from "../../../components/ProductsPage/ProductsPageContent";
import { baseUrl } from "../../../providers/api/api";
import api from "../../../providers/api";
import { IProduct } from "@mebel-shop/data-objects/dist/Product";
import { useLocationField } from "react-location-query";

const Manufacture = () => {
	const { id } = useParams();

	const [products, setProducts] = useState<IProduct[] | null>(null);
	const [] = useLocationField("page", {
		type: "number",
		initial: 1,
		hideIfInitial: true
	});
	const [] = useLocationField("limit", {
		type: "number",
		initial: 10,
		hideIfInitial: true
	});

	useEffect(() => {
		handleSearch();
	}, []);

	const handleSearch = async () => {
		const {
			sofas: { products, count }
		} = await api.manufactures.getProducts(+id, 1, 50);

		setProducts(products);
	};

	if (products === null) return null;

	return (
		<div>
			<ProductsPage>
				<ProductsPageHeader title="Дивани" />
				<ProductsPageContent
					productPageBaseUrl="/products/sofas/"
					photosBaseUrl={`${baseUrl}/static/sofas/photos/`}
					products={products}
					pagesCount={1}
				></ProductsPageContent>
			</ProductsPage>

			<ProductsPage>
				<ProductsPageHeader title="Дивани" />
				<ProductsPageContent
					productPageBaseUrl="/products/sofas/"
					photosBaseUrl={`${baseUrl}/static/sofas/photos/`}
					products={products}
					pagesCount={1}
				></ProductsPageContent>
			</ProductsPage>
		</div>
	);
};

export default Manufacture;

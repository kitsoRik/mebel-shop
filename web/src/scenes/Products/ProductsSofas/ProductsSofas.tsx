import { Checkbox, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { useLocationField } from "react-location-query";
import ProductsPage from "../../../components/ProductsPage";
import ProductsPageHeader from "../../../components/ProductsPage/ProductsPageHeader";
import ProductsPageContent from "../../../components/ProductsPage/ProductsPageContent";
import { baseUrl } from "../../../providers/api/api";
import ProductsPageContentSearchPanel from "../../../components/ProductsPage/ProductsPageContent/ProductsPageContentSearchPanel";
import ProductsSofasPageContentSearchPanel from "./ProductsSofasPageContentSearchPanel";
import { selectSofasByPage } from "../../../store/modules/sofas/selectors";
import { getSofas } from "../../../store/modules/sofas/actions";

interface Props {
	getSofas: typeof getSofas;
}

const ProductsSofas = ({ getSofas }: Props) => {
	const [page, setPage] = useLocationField("page", {
		type: "number",
		initial: 1,
		hideIfInitial: true
	});

	const [limit, setLimit] = useLocationField("limit", {
		type: "number",
		initial: 20,
		hideIfInitial: true
	});

	const [minMaxWeight] = useLocationField("minMaxWeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxMaxWeight] = useLocationField("maxMaxWeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	useEffect(() => {
		getSofas(page, { minMaxWeight, maxMaxWeight }, limit);
	}, []);

	const handleSearch = () => {
		getSofas(page, { minMaxWeight, maxMaxWeight }, limit);
	};

	const sofas = useSelector(selectSofasByPage(page));

	return (
		<ProductsPage>
			<ProductsPageHeader />
			<ProductsPageContent
				photosBaseUrl={`${baseUrl}/static/sofas/photos/`}
				products={sofas}
			>
				<ProductsPageContentSearchPanel onSearch={handleSearch}>
					<ProductsSofasPageContentSearchPanel />
				</ProductsPageContentSearchPanel>
			</ProductsPageContent>
		</ProductsPage>
	);
};

const enhance = compose(connect(null, { getSofas }));

// @ts-ignore
export default enhance(ProductsSofas);

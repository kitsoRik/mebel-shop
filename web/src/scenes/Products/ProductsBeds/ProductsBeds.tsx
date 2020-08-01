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
import ProductsBedsPageContentSearchPanel from "./ProductsBedsPageContentSearchPanel";
import { selectBedsByPage } from "../../../store/modules/beds/selectors";
import { getBeds } from "../../../store/modules/beds/actions";
import { RootState } from "../../../store";

interface Props {
	getBeds: typeof getBeds;
}

const ProductsBeds = ({ getBeds }: Props) => {
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

	const [minWidth] = useLocationField("minWidth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxWidth] = useLocationField("maxWidth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [minHeight] = useLocationField("minHeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxHeight] = useLocationField("maxHeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [minDepth] = useLocationField("minDepth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxDepth] = useLocationField("maxDepth", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [minWeight] = useLocationField("minWeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	const [maxWeight] = useLocationField("maxWeight", {
		type: "number",
		initial: 0,
		hideIfInitial: true
	});

	useEffect(() => {
		handleSearch();
	}, [page]);

	const handleSearch = () => {
		getBeds(
			page,
			{
				minMaxWeight,
				maxMaxWeight,
				maxDepth,
				maxHeight,
				maxWeight,
				maxWidth,
				minDepth,
				minHeight,
				minWeight,
				minWidth
			},
			limit
		);
	};

	const beds = useSelector(selectBedsByPage(page));
	const totalPages = Math.ceil(
		useSelector((state: RootState) => state.beds.bedsNumbers) / limit
	);
	useEffect(() => {
		if (totalPages < page && totalPages !== 0) {
			setPage(totalPages);
		}
	}, [totalPages]);

	return (
		<ProductsPage>
			<ProductsPageHeader title="Дивани" />
			<ProductsPageContent
				productPageBaseUrl={`/products/beds/`}
				photosBaseUrl={`${baseUrl}/static/beds/photos/`}
				products={beds}
				pagesCount={totalPages}
			>
				<ProductsPageContentSearchPanel onSearch={handleSearch}>
					<ProductsBedsPageContentSearchPanel />
				</ProductsPageContentSearchPanel>
			</ProductsPageContent>
		</ProductsPage>
	);
};

const enhance = compose(connect(null, { getBeds }));

// @ts-ignore
export default enhance(ProductsBeds);

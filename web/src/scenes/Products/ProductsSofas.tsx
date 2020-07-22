import { Checkbox, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";

import ProductsPage from "../../components/ProductsPage";
import ProductsPageContent from "../../components/ProductsPage/ProductsPageContent";
import ProductsPageContentSearchPanel from "../../components/ProductsPage/ProductsPageContent/ProductsPageContentSearchPanel/ProductsPageContentSearchPanel";
import ProductsPageHeader from "../../components/ProductsPage/ProductsPageHeader";
import { getSofas } from "../../store/modules/sofas/actions";
import { selectSofasByIds } from "../../store/modules/sofas/selectors";

interface Props {
	getSofas: typeof getSofas;
}

const ProductsSofas = ({ getSofas }: Props) => {
	
	useEffect(() => {
		getSofas(1, 10);
	}, []);

	const sofas = useSelector(selectSofasByIds([0, 1, 2]));

	return (
		<ProductsPage>
			<ProductsPageHeader />
			<ProductsPageContent products={sofas}>
				<ProductsPageContentSearchPanel>
					<Form.Item>
						<Input />
					</Form.Item>
					<Form.Item>
						<Select></Select>
					</Form.Item>
					<Form.Item>
						<Checkbox>qwe</Checkbox>
						<Checkbox>qw2</Checkbox>
					</Form.Item>
				</ProductsPageContentSearchPanel>
			</ProductsPageContent>
		</ProductsPage>
	);
};

const enhance = compose(connect(null, { getSofas }));

// @ts-ignore
export default enhance(ProductsSofas);

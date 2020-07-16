import { Checkbox, Form, Input, Select } from "antd";
import React from "react";

import ProductsPage from "../../components/ProductsPage";
import ProductsPageContent from "../../components/ProductsPage/ProductsPageContent";
import ProductsPageContentSearchPanel from "../../components/ProductsPage/ProductsPageContent/ProductsPageContentSearchPanel/ProductsPageContentSearchPanel";
import ProductsPageHeader from "../../components/ProductsPage/ProductsPageHeader";
import { IProduct } from "../../models/interfaces/Product";

const products = new Array(100)
	.fill(1)
	.map((value, index): IProduct => ({ id: index.toString() }));

const ProductsSofas = () => {
	return (
		<ProductsPage>
			<ProductsPageHeader />
			<ProductsPageContent products={products}>
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

export default ProductsSofas;

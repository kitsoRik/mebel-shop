import classes from "./ProductsPageContentSearchPanel.module.scss";
import React from "react";
import { Button, Form } from "antd";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const ProductsPageContentSearchPanel = ({ children }: Props) => {
	return (
		<Form className={classes.form}>
			{children}
			<Form.Item>
				<Button type="primary" style={{ width: "100%" }}>
					Знайти
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ProductsPageContentSearchPanel;

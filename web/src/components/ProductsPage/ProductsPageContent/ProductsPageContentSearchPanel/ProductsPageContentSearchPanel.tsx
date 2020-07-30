import classes from "./ProductsPageContentSearchPanel.module.scss";
import React from "react";
import { Button, Form } from "antd";

interface Props {
	children: JSX.Element | JSX.Element[];

	onSearch: () => void;
}

const ProductsPageContentSearchPanel = ({ children, onSearch }: Props) => {
	return (
		<Form className={classes.form} layout="vertical">
			{children}
			<Form.Item>
				<Button
					type="primary"
					style={{ width: "100%" }}
					onClick={onSearch}
				>
					Знайти
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ProductsPageContentSearchPanel;

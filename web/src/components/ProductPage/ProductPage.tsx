import classes from "./ProductPage.module.scss";
import { Tabs } from "antd";
import React from "react";
import Overview from "./Overview";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const ProductPage = ({ children }: Props) => {
	const elements = Array.isArray(children) ? children : [children];

	const overview = elements.find((e) => e.type === Overview);

	return (
		<div className={classes.page}>
			<Tabs defaultActiveKey="1">
				<Tabs.TabPane tab="Огляд" key="1" style={{ height: 200 }}>
					{overview}
				</Tabs.TabPane>
				<Tabs.TabPane tab="Характеристики" key="2">
					Content of Tab Pane 2
				</Tabs.TabPane>
				<Tabs.TabPane tab="Відклики" key="3">
					Content of Tab Pane 3
				</Tabs.TabPane>
			</Tabs>
		</div>
	);
};

ProductPage.Overview = Overview;

export default ProductPage;

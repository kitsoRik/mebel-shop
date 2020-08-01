import classes from "./ProductPage.module.scss";
import { Tabs } from "antd";
import React from "react";
import Overview from "./Overview";
import Characteristics from "./Characteristics";
import { useLocationField } from "react-location-query";

interface Props {
	children: JSX.Element | JSX.Element[];
}

const ProductPage = ({ children }: Props) => {
	const elements = Array.isArray(children) ? children : [children];

	const overview = elements.find((e) => e.type === Overview);
	const characteristics = elements.find((e) => e.type === Characteristics);

	const [tab, setTab] = useLocationField("tab", {
		type: "string",
		initial: "overview",
		enum: ["overview", "characteristics"]
	});

	return (
		<div className={classes.page}>
			<Tabs activeKey={tab} onTabClick={(value) => setTab(value)}>
				<Tabs.TabPane tab="Огляд" key="overview">
					{overview}
				</Tabs.TabPane>
				<Tabs.TabPane tab="Характеристики" key="characteristics">
					{characteristics}
				</Tabs.TabPane>
			</Tabs>
		</div>
	);
};

ProductPage.Overview = Overview;
ProductPage.Characteristics = Characteristics;

export default ProductPage;

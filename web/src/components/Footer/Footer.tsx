import { Layout, Menu } from "antd";
import React from "react";
import "./Footer.module.scss";

const Footer = () => {
	return (
		<Layout.Footer style={{ padding: 0 }}>
			<Menu theme="dark">
				<Menu.Item disabled={true}>
					© Интернет-магазин 2020-2020
				</Menu.Item>
			</Menu>
		</Layout.Footer>
	);
};

export default Footer;

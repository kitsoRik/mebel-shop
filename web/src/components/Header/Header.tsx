import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import SubMenu from "antd/lib/menu/SubMenu";
import classes from "./Header.module.scss";
import UserIcon from "../../shared/UserIcon";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Layout.Header
			style={{
				height: 64,
				background: "white",
				padding: 0
			}}
			color="white"
		>
			<div className={classes.upper}>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["2"]}
					style={{ height: 64 }}
				>
					<SubMenu title="Каталог">
						<Menu.Item>
							<Link to="/products/sofas/">Дивани</Link>
						</Menu.Item>
						<Menu.Item>Ліжка</Menu.Item>
						<Menu.Item>Кухні</Menu.Item>
					</SubMenu>
					<Menu.Item key="2">nav 2</Menu.Item>
				</Menu>
				<UserIcon />
			</div>
		</Layout.Header>
	);
};

export default Header;

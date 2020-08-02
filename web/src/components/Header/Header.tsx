import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import SubMenu from "antd/lib/menu/SubMenu";
import classes from "./Header.module.scss";
import UserIcon from "../../shared/UserIcon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();

	return (
		<Layout.Header
			style={{
				height: 64,
				padding: 0
			}}
			color="white"
		>
			<div className={classes.upper}>
				<Menu theme="dark" mode="horizontal" style={{ height: 64 }}>
					<Menu.Item key="main" active={location.pathname === "/"}>
						<Link to="/">Головна</Link>
					</Menu.Item>
					<Menu.Item
						key="manufactures"
						active={location.pathname === "/manufactures"}
					>
						<Link to="/manufactures">Виробники</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/products/sofas/">Дивани</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/products/beds/">Ліжка</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/products/wardrobes/">Шафи</Link>
					</Menu.Item>
				</Menu>
				<Menu theme="dark" mode="horizontal" style={{ height: 64 }}>
					<Menu.Item key="about" active={location.pathname === "/"}>
						<Link to="/about">Про нас</Link>
					</Menu.Item>
					<Menu.Item
						key="contacts"
						active={location.pathname === "/"}
					>
						<Link to="/contacts">Контакти</Link>
					</Menu.Item>
				</Menu>
			</div>
		</Layout.Header>
	);
};

export default Header;

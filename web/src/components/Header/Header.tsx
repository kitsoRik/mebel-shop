import React from "react";
import { Layout, Menu } from "antd";

import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const { pathname } = useLocation();
	console.log(pathname, pathname === "/");
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
					<Menu.Item key="main" active={pathname === "/"}>
						<Link to="/">Головна</Link>
					</Menu.Item>
					<Menu.Item
						key="manufactures"
						disabled={true}
						active={pathname.startsWith("/manufactures")}
					>
						<Link to="/manufactures">Виробники</Link>
					</Menu.Item>
					<Menu.Item active={pathname.startsWith("/products/sofas")}>
						<Link to="/products/sofas/">Дивани</Link>
					</Menu.Item>
					<Menu.Item active={pathname.startsWith("/products/beds")}>
						<Link to="/products/beds/">Ліжка</Link>
					</Menu.Item>
					<Menu.Item
						active={pathname.startsWith("/products/wardrobes")}
					>
						<Link to="/products/wardrobes/">Шафи</Link>
					</Menu.Item>
				</Menu>
				<Menu theme="dark" mode="horizontal" style={{ height: 64 }}>
					<Menu.Item key="about" active={pathname === "/about"}>
						<Link to="/about">Про нас</Link>
					</Menu.Item>
					<Menu.Item key="contacts" active={pathname === "/contacts"}>
						<Link to="/contacts">Контакти</Link>
					</Menu.Item>
				</Menu>
			</div>
		</Layout.Header>
	);
};

export default Header;

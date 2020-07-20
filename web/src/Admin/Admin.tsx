import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect } from "react";
import { connect, Provider, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { auth } from "../store/modules/user/actions";
import Content from "./components/Content";
import Header from "./components/Header";
import Routes from "./Routes";
import Login from "./scenes/Login";

interface Props {
	authUser?: typeof auth;
}

const Admin = ({ authUser }: Props) => {
	const { data, dataLoading } = useSelector(
		({ user: { data, dataLoading } }: any) => ({
			data,
			dataLoading,
		})
	);
	const content = !data ? <LoginContent /> : <AdminContent />;

	useEffect(() => {
		try {
			authUser!();
		} catch (e) {}
	}, []);

	if (dataLoading) return null;

	return (
		<Layout>
			<Header />
			{content}
		</Layout>
	);
};

const LoginContent = () => (
	<Layout>
		<Content>
			<Login />
		</Content>
	</Layout>
);

const AdminContent = () => (
	<Layout>
		<Layout.Sider width={200} className="site-layout-background">
			<Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
				<Menu.SubMenu key="add" icon={<UserOutlined />} title="Додати">
					<Menu.Item key="admin">
						<Link to="/admin/sofas/add">Додати диван</Link>
					</Menu.Item>
					<Menu.Item key="manufacture">
						<Link to="/admin/manufactures/add">
							Додати виробника
						</Link>
					</Menu.Item>
				</Menu.SubMenu>
				<Menu.SubMenu
					key="views"
					icon={<UserOutlined />}
					title="Переглянути"
				>
					<Menu.Item key="1">
						<Link to="/admin/manufactures/">
							Переглянути виробників
						</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/admin/sofas/">Переглянути дивани</Link>
					</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		</Layout.Sider>
		<Layout>
			<Content>
				<Routes />
			</Content>
		</Layout>
	</Layout>
);

const mapDispatchToProps = { authUser: auth };

const enhance = compose(connect(null, mapDispatchToProps));

// @ts-ignore
export default enhance(Admin);

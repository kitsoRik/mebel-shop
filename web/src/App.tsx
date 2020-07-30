import { Layout } from "antd";
import React from "react";
import { useLocation } from "react-router";
import AdminRoot from "./Admin/Root";
import classes from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./Routes";

interface Props {
	getUserData?: Function;
}

function App({ getUserData }: Props) {
	if (useLocation().pathname.startsWith("/admin")) return <AdminRoot />;
	return (
		<Layout className={classes.App}>
			<Header />
			<Layout.Content className={classes.content}>
				<div className={classes.inside}>
					<Routes />
				</div>
			</Layout.Content>
			<Footer />
		</Layout>
	);
}

export default App;

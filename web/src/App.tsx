import { Layout } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { compose } from "redux";
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
				<Routes />
			</Layout.Content>
			<Footer />
		</Layout>
	);
}

export default App;

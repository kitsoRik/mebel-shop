import { Layout } from "antd";
import React from "react";
import classes from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
	return (
		<Layout className={classes.App}>
			<Header />
			<Layout.Content>
				<Routes />
			</Layout.Content>
			<Footer />
		</Layout>
	);
}

export default App;

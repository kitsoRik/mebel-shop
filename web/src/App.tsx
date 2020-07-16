import { Layout } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import classes from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./Routes";
import { getUserData } from "./store/modules/user/actions";

interface Props {
	getUserData?: Function;
}

function App({ getUserData }: Props) {
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

const mapDispatchToProps = { getUserData };

const enhance = compose(connect(null, mapDispatchToProps));

export default enhance(App);

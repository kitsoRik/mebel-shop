import React from "react";

import { Layout } from "antd";
import classes from "./Home.module.scss";
import Content from "./Content";
import Slider from "./Slider";

const Home = () => {
	return (
		<Layout style={{ height: "100%" }}>
			<Layout.Sider theme="light" width={250}>
				<Slider />
			</Layout.Sider>
			<Layout>
				<Layout.Content>
					<Content />
				</Layout.Content>
			</Layout>
		</Layout>
	);
};

export default Home;

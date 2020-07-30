import React from "react";

import { Layout, Button } from "antd";
import classes from "./Home.module.scss";
import Content from "./Content";

const Home = () => {
	return (
		<Layout style={{ height: "100%" }}>
			<Layout.Sider theme="light">
				<div className={classes.slider}>
					<Button type="primary">Дивани</Button>
					<Button type="primary">Кухні</Button>
				</div>
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

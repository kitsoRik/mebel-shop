import React from "react";

import { Layout, Button, Card } from "antd";
import classes from "./Home.module.scss";
import Content from "./Content";

const Home = () => {
	return (
		<Layout style={{ height: "100%" }}>
			<Layout.Sider theme="light" width={250}>
				<div className={classes.slider}>
					<Card title="Знайти товар" extra={<a href="#"></a>}>
						<div className={classes.card}>
							<Button type="primary">Дивани</Button>
							<Button type="primary">Кухні</Button>
						</div>
					</Card>
					<Card
						title="Виробники"
						extra={<a href="#">Всі виробники</a>}
					>
						<div className={classes.card}>
							<Button type="primary">Матролюкс</Button>
							<Button type="primary">Венето</Button>
						</div>
					</Card>
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

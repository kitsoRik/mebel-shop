import React from "react";
import { Card, Button } from "antd";
import classes from "./Slider.module.scss";
import Manufactures from "./Manufactures";

const Slider = () => {
	return (
		<div className={classes.slider}>
			<Card title="Знайти товар" extra={<a href="#"></a>}>
				<div className={classes.card}>
					<Button type="primary">Дивани</Button>
					<Button type="primary">Кухні</Button>
				</div>
			</Card>
			<Card title="Виробники" extra={<a href="#">Всі виробники</a>}>
				<div className={classes.card}>
					<Manufactures />
				</div>
			</Card>
		</div>
	);
};

export default Slider;

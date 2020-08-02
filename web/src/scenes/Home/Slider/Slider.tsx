import React from "react";
import { Card, Button } from "antd";
import classes from "./Slider.module.scss";
import Manufactures from "./Manufactures";
import { Link } from "react-router-dom";

const Slider = () => {
	return (
		<div className={classes.slider}>
			<Card title="Знайти товар" extra={<a href="#"></a>}>
				<div className={classes.card}>
					<Button type="primary">
						<Link to="/products/sofas/">Дивани</Link>
					</Button>
					<Button type="primary">
						<Link to="/products/beds/">Ліжка</Link>
					</Button>
					<Button type="primary">
						<Link to="/products/wardrobes/">Шафи</Link>
					</Button>
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

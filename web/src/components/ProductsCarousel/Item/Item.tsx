import React from "react";
import classes from "./Item.module.scss";

interface Props {
	title: string;
	photoUrl: string;
}

const Item = ({ title, photoUrl }: Props) => {
	return (
		<div className={classes.item}>
			<h2 className={classes.title}>{title}</h2>
			<img className={classes.img} src={photoUrl} />
		</div>
	);
};

export default Item;

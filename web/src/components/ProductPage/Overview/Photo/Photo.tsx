import React from "react";
import classes from "./Photo.module.scss";

interface Props {
	url: string;
}

const Photo = ({ url }: Props) => {
	return (
		<div className={classes.photo}>
			<img className={classes.img} src={url} />
		</div>
	);
};

export default Photo;

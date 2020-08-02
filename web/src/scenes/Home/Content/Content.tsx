import React from "react";
import SofasCarousel from "./SalesCarousel";
import classes from "./Content.module.scss";

const Content = () => {
	return (
		<div className={classes.content}>
			<SofasCarousel />
		</div>
	);
};

export default Content;

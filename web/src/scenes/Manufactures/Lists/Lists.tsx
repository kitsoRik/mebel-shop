import React from "react";
import List from "./List/List";
import BestList from "./BestList";
import RecomendedList from "./RecomendedList/RecomendedList";
import classes from "./Lists.module.scss";

const Lists = () => {
	return (
		<div className={classes.wrapper}>
			<BestList className={classes.best} />
			<RecomendedList className={classes.recomended} />
		</div>
	);
};

export default Lists;

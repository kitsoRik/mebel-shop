import React from "react";
import { Route, Switch } from "react-router";
import Add from "./Add";
import Views from "./Views";

const Manufactures = () => {
	return (
		<Switch>
			<Route path="/admin/manufactures" exact component={Views} />
			<Route path="/admin/manufactures/add" exact component={Add} />
		</Switch>
	);
};

export default Manufactures;

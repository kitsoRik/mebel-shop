import React from "react";
import { Route, Switch } from "react-router";
import Bed from "./Add";
import Views from "./Views";

const Beds = () => {
	return (
		<Switch>
			<Route path="/admin/beds" exact component={Views} />
			<Route path="/admin/beds/add" exact component={Bed} />
		</Switch>
	);
};

export default Beds;

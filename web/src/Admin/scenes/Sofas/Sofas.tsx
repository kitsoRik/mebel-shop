import React from "react";
import { Route, Switch } from "react-router";
import Sofa from "./Add";
import Views from "./Views";

const Sofas = () => {
	return (
		<Switch>
			<Route path="/admin/sofas" exact component={Views} />
			<Route path="/admin/sofas/add" exact component={Sofa} />
		</Switch>
	);
};

export default Sofas;

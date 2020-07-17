import React from "react";
import { Route, Switch } from "react-router";
import Add from "./scenes/Add";
import Manufacture from "./scenes/Add/Manufacture";
import Sofa from "./scenes/Add/Sofa";
import Manufacturers from "./scenes/Views/Manufacturers";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/add" exact component={Add} />
			<Route path="/admin/add/sofa" exact component={Sofa} />
			<Route
				path="/admin/add/manufacture"
				exact
				component={Manufacture}
			/>

			<Route
				path="/admin/views/manufactures"
				exact
				component={Manufacturers}
			/>
		</Switch>
	);
};

export default Routes;

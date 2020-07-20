import React from "react";
import { Route, Switch } from "react-router";
import Manufactures from "./scenes/Manufactures";
import Sofas from "./scenes/Sofas";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/manufactures" component={Manufactures} />
			<Route path="/admin/sofas" component={Sofas} />
		</Switch>
	);
};

export default Routes;

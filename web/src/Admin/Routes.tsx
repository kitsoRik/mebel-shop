import React from "react";
import { Route, Switch } from "react-router";
import Manufactures from "./scenes/Manufactures";
import Sofas from "./scenes/Sofas";
import Beds from "./scenes/Beds";
import Wardrobes from "./scenes/Wardrobes";

const Routes = () => {
	return (
		<Switch>
			<Route path="/admin/manufactures" component={Manufactures} />
			<Route path="/admin/sofas" component={Sofas} />
			<Route path="/admin/beds" component={Beds} />
			<Route path="/admin/wardrobes" component={Wardrobes} />
		</Switch>
	);
};

export default Routes;

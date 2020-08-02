import React from "react";
import { Route, Switch } from "react-router";
import Wardrobe from "./Add";
import Views from "./Views";

const Wardrobes = () => {
	return (
		<Switch>
			<Route path="/admin/wardrobes" exact component={Views} />
			<Route path="/admin/wardrobes/add" exact component={Wardrobe} />
		</Switch>
	);
};

export default Wardrobes;

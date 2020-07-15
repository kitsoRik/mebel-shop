import React from "react";
import { Route, Switch } from "react-router";
import Home from "./scenes/Home";
import Products from "./scenes/Products";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/products" component={Products} />
		</Switch>
	);
};

export default Routes;

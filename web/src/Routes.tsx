import React from "react";
import { Route, Switch, useLocation } from "react-router";
import ProductPageSofa from "./components/ProductPage/ProductPageSofa";
import Home from "./scenes/Home";
import ProductsSofas from "./scenes/Products/ProductsSofas";

const productsTypes = ["sofas"];

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			{productsTypes.map((type) => (
				<>
					<Route
						path={`/products/${type}`}
						exact
						component={ProductsSofas}
					/>
					<Route
						path={`/products/${type}/:id`}
						exact
						component={ProductPageSofa}
					/>
				</>
			))}
		</Switch>
	);
};

export default Routes;

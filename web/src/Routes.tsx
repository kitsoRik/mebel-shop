import React from "react";
import { Route, Switch } from "react-router";
import ProductPageSofa from "./components/ProductPage/ProductPageSofa";
import Admin from "./scenes/Admin";
import Home from "./scenes/Home";
import Products from "./scenes/Products";
import ProductsSofas from "./scenes/Products/ProductsSofas";

const productsTypes = ["sofas"];

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/products" exact component={Products} />
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

			<Route path="/admin" component={Admin} />
		</Switch>
	);
};

export default Routes;

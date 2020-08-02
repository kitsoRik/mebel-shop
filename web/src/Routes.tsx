import React from "react";
import { Route, Switch, useLocation } from "react-router";
import ProductPageSofa from "./components/ProductPage/ProductPageSofa";
import Home from "./scenes/Home";
import ProductsSofas from "./scenes/Products/ProductsSofas";
import Manufactures from "./scenes/Manufactures";
import About from "./scenes/About";
import Contacts from "./scenes/Contacts";
import ProductsBeds from "./scenes/Products/ProductsBeds";
import ProductPageBed from "./components/ProductPage/ProductPageBed";
import ProductsWardrobes from "./scenes/Products/ProductsWardrobes";
import ProductPageWardrobe from "./components/ProductPage/ProductPageWardrobe";

const productsTypes = ["sofas", "beds"];

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home} />

			<Route path="/manufactures" component={Manufactures} />
			<Route path="/about" component={About} />
			<Route path="/contacts" component={Contacts} />

			<Route path={`/products/sofas`} exact component={ProductsSofas} />
			<Route
				path={`/products/sofas/:id`}
				exact
				component={ProductPageSofa}
			/>

			<Route path={`/products/beds`} exact component={ProductsBeds} />
			<Route
				path={`/products/beds/:id`}
				exact
				component={ProductPageBed}
			/>

			<Route
				path={`/products/wardrobes`}
				exact
				component={ProductsWardrobes}
			/>
			<Route
				path={`/products/wardrobes/:id`}
				exact
				component={ProductPageWardrobe}
			/>
		</Switch>
	);
};

export default Routes;

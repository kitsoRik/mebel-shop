import React from "react";
import { Route } from "react-router";
import Manufacture from "./Manufacture";
import List from "./List";

const Manufactures = () => {
	return (
		<>
			<Route path="/manufactures" exact component={List} />
			<Route path="/manufactures/:id" exact component={Manufacture} />
		</>
	);
};

export default Manufactures;

import React from "react";
import { Route } from "react-router";
import Manufacture from "./Manufacture";
import Lists from "./Lists";

const Manufactures = () => {
	return (
		<>
			<Route path="/manufactures" exact component={Lists} />
			<Route path="/manufactures/:id" exact component={Manufacture} />
		</>
	);
};

export default Manufactures;

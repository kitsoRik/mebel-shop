import React from "react";
import { Provider } from "react-redux";
import Admin from "./Admin";
import store from "./store";

const AdminRoot = () => {
	return (
		<Provider store={store}>
			<Admin />
		</Provider>
	);
};

export default AdminRoot;

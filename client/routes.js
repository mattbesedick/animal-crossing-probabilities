import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contribute from "./components/Contribute";

const Routes = () => {
	return (
		<Switch>
			<Route path="/contribute" component={Contribute} />
			<Route path="/home" component={Home} />
			<Route path="/" component={Home} />
		</Switch>
	);
};

export default Routes;

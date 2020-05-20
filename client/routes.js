import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contribute from "./components/Contribute";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/contribute" component={Contribute} />
			<Route path="/" component={Home} />
		</Switch>
	);
};

export default Routes;

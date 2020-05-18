import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
	typography: {
		fontFamily: ["FinkHeavy"],
	},
});

const client = new ApolloClient({
	uri: "http://localhost:4000/api",
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById("root")
);

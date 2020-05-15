import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		height: "100vh",
		width: "100vw",
	},
});

const Home = (props) => {
	const classes = useStyles();
	return <div className={classes.root}>test</div>;
};

export default Home;

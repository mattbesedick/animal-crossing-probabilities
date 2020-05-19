import React from "react";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		padding: "20px",
		paddingRight: "100px",
		justifyContent: "flex-end",
	},
	links: {
		textDecoration: "none",
		color: "white",
	},
});

const NavBar = (props) => {
	const classes = useStyles();
	return (
		<Grid container direction="row" className={classes.root} spacing={6}>
			<Grid item>
				<Link to="/home" className={classes.links}>
					<Typography>Home</Typography>
				</Link>
			</Grid>
			<Grid item>
				<Link to="/contribute" className={classes.links}>
					<Typography>Contribute</Typography>
				</Link>
			</Grid>
		</Grid>
	);
};

export default NavBar;

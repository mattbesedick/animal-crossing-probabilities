import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
	root: {},
	image: {
		width: "50px",
		height: "50px",
	},
});

const FishBubble = (props) => {
	const classes = useStyles();
	return (
		<div>
			<svg viewBox="0 0 100 100" width="150" height="150">
				 
				<circle
					cx="50"
					cy="50"
					r="50"
					className={classes.root}
					fill="#B47C42"
				/>
				<text x="50" y="35" textAnchor="middle" fontSize="30px">
					{props.fish.percentage}%
				</text>
				<image
					xlinkHref={`${props.fish.imageUrl}`}
					className={classes.image}
					x="25"
					y="40"
				/>
			</svg>
		</div>
	);
};

export default FishBubble;

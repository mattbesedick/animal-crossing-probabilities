import React, { useImperativeHandle } from "react";
import {
	Grid,
	makeStyles,
	Typography,
	Button,
	IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
	root: {
		width: "475px",
		height: "60px",
		backgroundColor: "#B47C42",
		borderRadius: "20px",
	},
});

const FishCaughtBubble = (props) => {
	const classes = useStyles();

	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignContent="center"
			className={classes.root}
			spacing={2}
		>
			<Grid item>
				<Typography>{`Fish: ${props.fish.name}`}</Typography>
			</Grid>
			<Grid item>
				<Typography>{`Month: ${props.fish.month}`}</Typography>
			</Grid>
			<Grid item>
				<Typography>{`Amount: ${props.fish.amount}`}</Typography>
			</Grid>

			<Grid item>
				<IconButton
					aria-label="delete"
					onClick={() => props.handleDelete(props.fish.name)}
				>
					<DeleteIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default FishCaughtBubble;

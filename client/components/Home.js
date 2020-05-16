import React from "react";
import { makeStyles, Grid, Typography, Hidden } from "@material-ui/core";

const useStyles = makeStyles({
	media: {
		paddingTop: "50px",
		height: "200px",
		width: "300px",
	},
	fish: {
		marginLeft: "25px",
		marginTop: "25px",
		background: "rgba(196, 196, 196, 0.2)",
		width: "565px",
		height: "363px",
		left: "430px",
		top: "378px",
		borderRadius: "48px",
		overflowY: "auto",
		overflowX: "hidden",
	},
	filters: {
		justifyContent: "space-between",
	},
});

const Home = (props) => {
	const classes = useStyles();
	return (
		<Grid container direction="column" alignContent="center" spacing={2}>
			<Grid item>
				<img src="./AnimalCrossing.png" className={classes.media} />
			</Grid>
			<Grid item>
				<Typography>
					Adjust the filters below to see the likelihood of catching a fish
					given a specific month
				</Typography>
			</Grid>
			<Grid item>
				<Grid container direction="row" className={classes.filters}>
					<Grid item>Month</Grid>
					<Grid item>Fish</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid
					container
					direction="row"
					className={classes.fish}
					justify="center"
				>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
					<Grid item>
						<img
							style={{ height: "100px", width: "100px" }}
							src="/AnimalCrossing.png"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;

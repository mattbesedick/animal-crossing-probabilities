import React, { useState } from "react";
import {
	makeStyles,
	Grid,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import FishBubble from "./FishBubble";

const useStyles = makeStyles({
	media: {
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
	},
	scroll: {
		paddingTop: "10px",
		maxHeight: "90%",
		maxWidth: "98%",
		overflowY: "scroll",
		"&::-webkit-scrollbar": {
			width: ".5em",
			height: "1em",
		},

		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "rgba(0,0,0,.1)",
			outline: "1px solid slategrey",
			borderRadius: "10px",
			height: "10px",
		},
		"&::-webkit-scrollbar-track": {
			margin: "50px 0",
		},
	},
	filters: {
		justifyContent: "space-around",
	},
	fishDude: {
		position: "fixed",
		bottom: "0",
		height: "300px",
		width: "300px",
	},
});

const Home = (props) => {
	const [month, setMonth] = useState("may");
	const [hemisphere, setHemisphere] = useState(0);
	const classes = useStyles();

	const handleChange = (event) => {
		if (event.target.name === "hemisphere") {
			setHemisphere(event.target.value);
		} else {
			setMonth(event.target.value);
		}
	};

	const fish = gql`
		{
			calculateProbabilityGivenMonth(month: "${month}", hemisphere: ${hemisphere}) {
				name
				percentage
				imageUrl
			}
		}
	`;
	const { data } = useQuery(fish);

	console.log(data);
	if (data) {
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
						<Grid item>
							<FormControl
								variant="outlined"
								style={{ minWidth: "100px", maxWidth: "150px" }}
							>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={month}
									name="month"
									displayEmpty
									onChange={handleChange}
								>
									<MenuItem value="">
										<em>Month</em>
									</MenuItem>
									<MenuItem value="january">January</MenuItem>
									<MenuItem value="febuary">Febuary</MenuItem>
									<MenuItem value="march">March</MenuItem>
									<MenuItem value="may">May</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item>
							<FormControl
								variant="outlined"
								style={{ minWidth: "100px", maxWidth: "150px" }}
							>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={hemisphere}
									name="hemisphere"
									displayEmpty
									onChange={handleChange}
								>
									<MenuItem value={0}>
										<em>Hemisphere</em>
									</MenuItem>
									<MenuItem value={0}>Northern</MenuItem>
									<MenuItem value={1}>Southern</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<div className={classes.fish}>
						<Grid
							container
							direction="row"
							className={classes.scroll}
							justify="center"
							spacing={2}
						>
							{data.calculateProbabilityGivenMonth.map((fish) => {
								return (
									<Grid item key={fish.name}>
										<FishBubble fish={fish} key={fish.name} />
									</Grid>
								);
							})}
						</Grid>
					</div>
				</Grid>
				<Grid item>
					<svg
						viewBox="0 0 1440 293"
						width="100%"
						height="90%"
						style={{ position: "fixed", bottom: -425, left: 0, zIndex: -1 }}
					>
						<path
							d="M-108 129.848l-13 3.25 13-12.001v8.751l107-26.75s242.5-115.5 314.5-102 205.5 132 205.5 132c195.553-29.126 362.918-37.527 462.75-6 0 0 248.25-88.5 320.75-85s142 78.999 142 78.999v366.501H-108v-357.75z"
							fill="#0E0061"
						/>
					</svg>
					<img
						src="/fish.png"
						style={{
							position: "fixed",
							height: "300px",
							width: "300px",
							bottom: "80px",
							right: "75px",
							zIndex: "-2",
						}}
					/>
					<img
						src="/palm.png"
						style={{
							position: "fixed",
							height: "300px",
							width: "300px",
							bottom: "115px",
							left: "75px",
							zIndex: "-2",
						}}
					/>
				</Grid>
			</Grid>
		);
	}
	return <Typography>Loading</Typography>;
};

export default Home;

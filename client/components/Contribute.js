import React, { useState } from "react";
import {
	Grid,
	FormControl,
	Select,
	MenuItem,
	Typography,
	makeStyles,
	TextField,
	Button,
	InputLabel,
} from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import FishCaughtBubble from "./FishCaughtBubble";

const useStyles = makeStyles({
	fish: {
		marginLeft: "25px",
		marginTop: "25px",
		background: "rgba(196, 196, 196, 0.2)",
		width: "565px",
		height: "363px",
		// left: "430px",
		// top: "378px",
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
	input: {
		color: "white",
	},
});

const createFish = gql`
	mutation {
		createFishCaught(name: "name", month: "month", amountCaught: Int) {
			name
		}
	}
`;

const Contribute = (props) => {
	const classes = useStyles();
	const [month, setMonth] = useState("");
	const [hemisphere, setHemisphere] = useState(0);
	const [amount, setAmount] = useState(0);
	const [fishName, setFishName] = useState("");
	const [fishCaught, setFishCaught] = useState([]);
	const [addFish, { data2 }] = useMutation(createFish);

	const handleChange = (event) => {
		if (event.target.name === "hemisphere") {
			setHemisphere(event.target.value);
		} else if (event.target.name === "month") {
			setMonth(event.target.value);
		} else if (event.target.name === "fish") {
			setFishName(event.target.value);
		} else {
			setAmount(event.target.value);
		}
	};

	const handleClick = (event) => {
		const aFish = {
			name: fishName,
			month: month,
			amount: amount,
		};

		setFishCaught([...fishCaught, aFish]);
		setFishName("");
		setAmount(0);
	};

	const handleDelete = (name) => {
		console.log("here");
		setFishCaught(
			fishCaught.filter((fish) => {
				return fish.name !== name;
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fishCaught.map((fish) => {
			addFish({
				variables: {
					name: fish.name,
					month: fish.month,
					amountCaught: fish.amount,
				},
			});
		});
		setFishCaught([]);
	};

	const fish = gql`
		{
			fishMonth(month: "${month}", hemisphere: ${hemisphere}) {
				name
				available
			}
		}
    `;
	const { data } = useQuery(fish);
	console.log("fish caught", fishCaught);

	console.log(data);
	if (data) {
		return (
			<Grid container direction="column" alignContent="center" spacing={2}>
				<Grid item className={classes.contribute}>
					<Typography variant="h1">Contribute</Typography>
				</Grid>
				<Grid item>
					<Grid container direction="row" justify="center" spacing={1}>
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
									style={{ color: "white" }}
								>
									<MenuItem value="">
										<em>Hemisphere</em>
									</MenuItem>
									<MenuItem value={0}>Northern</MenuItem>
									<MenuItem value={1}>Southern</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item>
							<FormControl
								variant="outlined"
								style={{ minWidth: "100px", maxWidth: "150px", color: "white" }}
							>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									value={month}
									name="month"
									displayEmpty
									onChange={handleChange}
									style={{ color: "white" }}
								>
									<MenuItem value="">
										<em>Month</em>
									</MenuItem>
									<MenuItem value="Janurary">Janurary</MenuItem>
									<MenuItem value="Febuaray">Febuaray</MenuItem>
									<MenuItem value="March">March</MenuItem>
									<MenuItem value="April">April</MenuItem>
									<MenuItem value="May">May</MenuItem>
									<MenuItem value="June">June</MenuItem>
									<MenuItem value="July">July</MenuItem>
									<MenuItem value="August">August</MenuItem>
									<MenuItem value="September">September</MenuItem>
									<MenuItem value="October">October</MenuItem>
									<MenuItem value="November">November</MenuItem>
									<MenuItem value="December">December</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item>
							{month !== "" ? (
								<FormControl
									variant="outlined"
									style={{ minWidth: "100px", maxWidth: "150px" }}
								>
									<Select
										labelId="demo-simple-select-helper-label"
										required
										id="demo-simple-select-helper"
										value={fishName}
										name="fish"
										displayEmpty
										onChange={handleChange}
										style={{ color: "white" }}
									>
										<MenuItem value="">
											<em>Fish</em>
										</MenuItem>
										{data.fishMonth.map((fish) => {
											return <MenuItem value={fish.name}>{fish.name}</MenuItem>;
										})}
									</Select>
								</FormControl>
							) : (
								<FormControl
									variant="outlined"
									style={{
										minWidth: "100px",
										maxWidth: "150px",
										color: "white",
									}}
								>
									<InputLabel id="fish">Fish</InputLabel>
									<Select label="fish" disabled />
								</FormControl>
							)}
						</Grid>
						<Grid item>
							{fishName !== "" ? (
								<TextField
									label="Amount Caught"
									name="amount"
									variant="outlined"
									type="number"
									InputProps={{
										className: classes.input,
										inputProps: { min: 0, max: 28 },
									}}
									InputLabelProps={{
										className: classes.input,
									}}
									onChange={handleChange}
									style={{ minWidth: "150px" }}
								/>
							) : (
								<TextField
									variant="outlined"
									label="Amount Caught"
									disabled
									style={{ maxWidth: "150px" }}
								/>
							)}
						</Grid>
						<Grid item>
							{amount !== 0 ? (
								<Button
									variant="contained"
									style={{ marginTop: "10px" }}
									onClick={handleClick}
								>
									Add Fish
								</Button>
							) : (
								<Button
									variant="contained"
									disabled
									style={{ marginTop: "10px" }}
								>
									Add Fish
								</Button>
							)}
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.fish}>
					<Grid
						container
						direction="row"
						className={classes.scroll}
						justify="center"
						spacing={4}
					>
						{fishCaught.map((fish) => {
							return (
								<Grid item>
									<FishCaughtBubble fish={fish} handleDelete={handleDelete} />
								</Grid>
							);
						})}
					</Grid>
				</Grid>
				<Grid item>
					<Button
						type="submit"
						style={{ minWidth: "200px", marginTop: "40px" }}
						variant="outlined"
						onClick={handleSubmit}
					>
						<Typography variant="h5" style={{ color: "white" }}>
							Submit Fish
						</Typography>
					</Button>
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
	} else {
		return <div>loading</div>;
	}
};

export default Contribute;

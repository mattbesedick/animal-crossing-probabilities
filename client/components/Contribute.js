import React, { useState } from "react";
import { Grid, FormControl, Select, MenuItem } from "@material-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Contribute = (props) => {
	const [month, setMonth] = useState("May");
	const [hemisphere, setHemisphere] = useState(0);
	const [amount, setAmount] = useState(0);
	const [fishName, setFishName] = useState("");

	const handleChange = (event) => {
		if (event.target.name === "hemisphere") {
			setHemisphere(event.target.value);
		} else if (event.target.name === "month") {
			setMonth(event.target.value);
		} else {
			setFishName(event.target.value);
		}
	};

	const handleSubmit = (event) => {};
	const fish = gql`
		{
			fishMonth(month: "${month}", hemisphere: ${hemisphere}) {
				name
				available
			}
		}
    `;
	const { data } = useQuery(fish);

	console.log(data);
	if (data) {
		return (
			<Grid container direction="column" justify="center">
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
					<FormControl
						variant="outlined"
						style={{ minWidth: "100px", maxWidth: "150px" }}
					>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={fishName}
							name="fish"
							displayEmpty
							onChange={handleChange}
						>
							<MenuItem value="">
								<em>Fish</em>
							</MenuItem>
							{data.fishMonth.map((fish) => {
								return <MenuItem value={fish.name}>{fish.name}</MenuItem>;
							})}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		);
	} else {
		return <div>loading</div>;
	}
};

export default Contribute;

const express = require("express");
const path = require("path");
const app = express();
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const gqlSchema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const morgan = require("morgan");

module.exports = app;

const PORT = 4000;

app.use(express.json());
app.use(morgan("dev"));
//static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// app.get("/*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "..", "public/index.html"));
// });

app.use(
	"/api",
	graphqlHttp({
		schema: gqlSchema,
		rootValue: resolvers,
		graphiql: true,
	})
);

mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@acnh-gihis.mongodb.net/acnh-stackathon?retryWrites=true&w=majority`
	)
	.then(() => {
		app.listen(process.env.PORT || PORT, () => {
			console.log("server is up at port 4000");
		});
	})
	.catch((err) => {
		console.log(err);
	});

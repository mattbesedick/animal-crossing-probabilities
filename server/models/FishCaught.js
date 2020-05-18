const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fishCaught = new Schema({
	name: {
		type: String,
		required: true,
	},
	month: {
		type: String,
		required: true,
	},
	amountCaught: {
		type: Number,
		required: true,
	},
	hemisphere: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("fishCaught", fishCaught);

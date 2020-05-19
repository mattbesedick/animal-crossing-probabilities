const Fish = require("../../models/Fish");
const FishCaught = require("../../models/FishCaught");

module.exports = {
	fish: async () => {
		try {
			const allFish = await Fish.find();
			return allFish.map((record) => {
				return { ...record._doc };
			});
		} catch (err) {
			console.log(err);
		}
	},
	fishMonth: async (args) => {
		try {
			const allFish = await Fish.find();

			//returns all fish with the available array set to correct hemisphere..... 0 = nothern, 1 = southern
			let newFish = allFish.map((fish) => {
				const fishObj = {
					name: fish.name,
					available: fish.available[args.hemisphere],
				};
				return fishObj;
			});

			//filters all fish that are available to catch in given month
			let newList = newFish.filter((fish) => {
				if (fish.available.includes(args.month)) {
					console.log("filter", fish);
					return fish;
				}
			});

			return [...newList];
		} catch (err) {
			console.log(err);
		}
	},
	allFishCaught: async () => {
		try {
			const allFish = await FishCaught.find();
			return allFish.map((record) => {
				console.log({ ...record._doc });
				return { ...record._doc };
			});
		} catch (err) {
			console.log(err);
		}
	},
	calculateProbabilityGivenMonth: async (args) => {
		try {
			//finds totals of all fish caught by month/location/hemisphere
			const allFish = await FishCaught.aggregate([
				{ $match: { hemisphere: args.hemisphere } },
				{
					$group: {
						_id: `$month`,
						total: { $sum: "$amountCaught" },
					},
				},
			]);
			//filters out the month user is looking for
			let fishForMonth = allFish.filter((month) => month._id === args.month)[0];

			//groups fishCaught by name, sums up totals for each fish given the month
			const probabilityPerFish = await FishCaught.aggregate([
				{ $match: { month: args.month, hemisphere: args.hemisphere } },
				{ $group: { _id: "$name", total: { $sum: "$amountCaught" } } },
			]);

			//calculates probability for each fish caught in the given month
			let totals = await probabilityPerFish.map(async (fish) => {
				let percentage = (fish.total / fishForMonth.total).toFixed(2) * 100;

				const picture = await Fish.findOne({ name: fish._id });

				const probability = {
					name: fish._id,
					percentage,
					imageUrl: picture.imageUrl,
				};

				return probability;
			});

			return [...totals];
		} catch (err) {
			console.log(err);
		}
	},
	createFish: async (args) => {
		try {
			const fish = new Fish({
				name: args.name,
				available: args.available,
				sellingPrice: args.sellingPrice,
			});
			await fish.save();
			return { ...fish._doc };
		} catch (err) {
			console.log(err);
		}
	},
	createFishCaught: async (args) => {
		try {
			const fish = new FishCaught({
				name: args.name,
				month: args.month,
				amountCaught: args.amountCaught,
			});
			await fish.save();
			return { ...fish._doc };
		} catch (err) {
			console.log(err);
		}
	},
};

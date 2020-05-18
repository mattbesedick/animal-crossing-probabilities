const mongoose = require('mongoose');
const Fish = require('./models/Fish');

const fish = [
	{
		name: 'Bitterling',
		location: 'river',
		available: [
			[ 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ],
			[ 'May', 'June', 'July', 'August', 'September' ]
		],
		sellingPrice: 900,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest?cb=20200401003128'
	},
	{
		name: 'Pale Chub',
		location: 'river',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 160,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-palechub.png/revision/latest?cb=20200401003129'
	},
	{
		name: 'Crucian Carp',
		location: 'river',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 160,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/0/03/NH-Icon-cruciancarp.png/revision/latest?cb=20200401003129'
	},
	{
		name: 'Dace',
		location: 'river',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 240,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/2/22/NH-Icon-dace.png/revision/latest?cb=20200401003129'
	},
	{
		name: 'Carp',
		location: 'pond',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 300,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Icon-carp.png/revision/latest?cb=20200401003129'
	},
	{
		name: 'Koi',
		location: 'pond',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 4000,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/NH-Icon-koi.png/revision/latest?cb=20200401003129'
	},
	{
		name: 'Goldfish',
		location: 'pond',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 1300,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/e/ed/NH-Icon-goldfish.png/revision/latest?cb=20200401003129'
	},
	{
		name: 'Pop-eyed Goldfish',
		location: 'pond',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 1300,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/c/c9/NH-Icon-popeyedgoldfish.png/revision/latest?cb=20200401003129'
	},
	{
		name: 'Ranchu Goldfish',
		location: 'pond',
		available: [
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			],
			[
				'Janurary',
				'Febuary',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			]
		],
		sellingPrice: 4500,
		imageUrl:
			'https://vignette.wikia.nocookie.net/animalcrossing/images/f/f9/NH-Icon-ranchugoldfish.png/revision/latest?cb=20200401003129'
	}
];

const seed = async () => {
	try {
		let newFish = [];
		console.log('here');
		fish.forEach((fish) => {
			newFish.push(new Fish(fish));
		});

		newFish.forEach((fish) => {
			Fish.create(fish);
		});
	} catch (err) {
		console.log(err);
	}
};

mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_USER}:${process.env
			.MONGO_PASSWORD}@acnh-gihis.mongodb.net/acnh-stackathon?retryWrites=true&w=majority`
	)
	.then(() => {
		seed();
	})
	.catch((err) => {
		console.log(err);
	});

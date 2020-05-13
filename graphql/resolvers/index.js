const Fish = require('../../models/Fish')
const FishCaught = require('../../models/FishCaught')

module.exports = {
    fish: async () => {
        try {
            const allFish = await Fish.find()
            return allFish.map(record => { return { ...record._doc } })
        } catch (err) {
            console.log(err)
        }
    },
    allFishCaught: async () => {
        try {
            const allFish = await FishCaught.find()
            return allFish.map(record => {
                console.log({ ...record._doc })
                return { ...record._doc }
            })
        } catch (err) {
            console.log(err)
        }
    },
    allFishCaughtGivenMonth: async args => {
        try {
            const allFish = await FishCaught.find({ month: args.month })
            return allFish.map(record => {
                console.log({ ...record._doc })
                return { ...record._doc }
            })
        } catch (err) {
            console.log(err)
        }
    },
    createFish: async args => {
        try {
            const fish = new Fish({
                name: args.name,
                available: args.available,
                sellingPrice: args.sellingPrice
            })
            await fish.save();
            return { ...fish._doc }
        } catch (err) {
            console.log(err)
        }
    },
    createFishCaught: async args => {
        try {
            const fish = new FishCaught({
                name: args.name,
                month: args.month,
                amountCaught: args.amountCaught
            })
            await fish.save()
            return { ...fish._doc }
        } catch (err) {
            console.log(err)
        }
    }
}
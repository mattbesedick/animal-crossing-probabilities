const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Probability {
        name: String!
        percentage: Float!
        imageUrl: String
    }
    type FishValidate {
        name: String
        available: [String]
    }
    type Fish {
        _id: ID
        name: String
        available: [[String]]!
        location: String
        sellingPrice: Int!
        imageUrl: String
    }    

    type FishCaught {
        _id: ID
        name: String!
        month: String!
        amountCaught: Int!
        hemisphere: Int
    }
    
    type RootQuery {
        fish: [Fish!]!
        fishMonth(month: String, hemisphere: Int): [FishValidate!]
        allFishCaught: [FishCaught!]!
        calculateProbabilityGivenMonth(month: String!, hemisphere: Int!): [Probability]
    }

    type RootMutation {
        createFish(name: String, location: String, available: [String!], sellingPrice: Int!): Fish
        createFishCaught(name: String!, month: String!,  amountCaught: Int!, hemisphere: Int): FishCaught
        updateFish(name: String): Fish
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `);

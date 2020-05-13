const express = require('express')
const app = express();
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')
const Fish = require('./models/Fish')


module.exports = app

const PORT = 4000

app.use(express.json())


app.use('/api', graphqlHttp({
    schema: buildSchema(`
    type Fish {
        _id: ID
        name: String
    }    
    
    type RootQuery {
            fish: [Fish!]!
        }
        type RootMutation {
            createFish(name: String): Fish
            updateFish(name: String): Fish
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        fish: () => Fish.find().then(result => {
            console.log(result)
            return result.map(fish => {
                return { ...fish._doc }
            })
        }).catch(err => {
            console.log(err)
            throw err
        }),
        createFish: args => {
            const fish = new Fish({
                name: args.name
            })
            return fish.save().then((result) => {
                console.log(result)
                return { ...result._doc }
            }).catch(err => {
                console.log(err)
                throw err;
            });
        }
    },
    graphiql: true
}))

mongoose.connect(`mongodb+srv://mb:0iXvWLSnaFubP7nv@acnh-gihis.mongodb.net/acnh-stackathon?retryWrites=true&w=majority`).then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log("server is up at port 4000")
    })
}).catch(err => {
    console.log(err)
})



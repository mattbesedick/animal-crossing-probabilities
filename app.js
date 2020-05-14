const express = require('express')
const app = express();
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const gqlSchema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')


module.exports = app

const PORT = 4000

app.use(express.json())


app.use('/api', graphqlHttp({
    schema: gqlSchema,
    rootValue: resolvers,
    graphiql: true
}))

mongoose.connect(`mongodb+srv://mb:0iXvWLSnaFubP7nv@acnh-gihis.mongodb.net/acnh-stackathon?retryWrites=true&w=majority`).then(() => {
    app.listen(process.env.PORT || PORT, () => {
        console.log("server is up at port 4000")
    })
}).catch(err => {
    console.log(err)
})



const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const loaders = require('./loaders')
const schemas = require('./schemas')

const app = express()
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schemas, context: { loaders } }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'))

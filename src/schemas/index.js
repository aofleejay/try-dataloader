const { mergeSchemas } = require('graphql-tools')
const photoSchema = require('./photo')

const schemas = mergeSchemas({ schemas: [ photoSchema ] })

module.exports = schemas

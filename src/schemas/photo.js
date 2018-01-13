const { makeExecutableSchema } = require('graphql-tools')
const axios = require('axios')

const typeDefs = [`
  type Photo {
    id: String!
    url: String!
    credit: User!
  }

  type User {
    id: String!
    name: String!
  }

  type Query {
    photos: [Photo]
  }

  schema {
    query: Query
  }
`]

const resolvers = {
  Query: {
    photos(root) {
      return axios.get('http://localhost:3000/photos')
        .then(res => res.data)
    }
  },
  Photo: {
    credit(root, args, context) {
      return context.loaders.userLoader.load(root.credit)
    }
  }
}

const photoSchema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = photoSchema

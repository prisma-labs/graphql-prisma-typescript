import { GraphQLServer } from 'graphql-yoga'
import { Graphcool } from 'graphcool-binding'
import { importSchema } from 'graphql-import'
import { resolvers } from './resolvers'

const typeDefs = importSchema('./src/schema.graphql')

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({
      schema: 'schemas/database.graphql',
      endpoint: process.env.GRAPHCOOL_ENDPOINT,
      apikey: process.env.GRAPHCOOL_APIKEY,
    }),
  }),
  options: { port: 5000 },
})

server.start(() => console.log('Server is running on http://localhost:5000'))

import { GraphQLServer } from 'graphql-yoga'
import { Graphcool } from 'graphcool-binding'
import { resolvers, fragmentReplacements } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({
      typeDefs: 'src/generated/database.graphql',
      fragmentReplacements,
      endpoint: process.env.GRAPHCOOL_ENDPOINT,
      secret: process.env.GRAPHCOOL_SECRET,
    }),
  }),
  options: { port: 5000 },
})

server.start(() => console.log('Server is running on http://localhost:5000'))

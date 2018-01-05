import { GraphQLServer } from 'graphql-yoga'
import { Graphcool } from './generated/graphcool'
import { resolvers, fragmentReplacements } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({
      fragmentReplacements,
      endpoint: process.env.GRAPHCOOL_ENDPOINT,
      secret: process.env.GRAPHCOOL_SECRET,
      debug: true,
    }),
  }),
})

server.start({ port: 5000 }, ({ port }) => console.log(`Server is running on http://localhost:${port}`))

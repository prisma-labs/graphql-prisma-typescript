import { GraphQLServer } from 'graphql-yoga'
import { Graphcool } from './generated/graphcool'
import { resolvers, fragmentReplacements } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Graphcool({ fragmentReplacements }),
  }),
  options: { port: 5000 },
})

server.start(() => console.log('Server is running on http://localhost:5000'))

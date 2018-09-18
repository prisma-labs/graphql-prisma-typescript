import { GraphQLServer } from 'graphql-yoga'

import { context } from './context'
import { resolvers } from './resolvers'

const server = new GraphQLServer({
  context,
  resolvers,
  typeDefs: './src/schema.graphql',
} as any)

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)

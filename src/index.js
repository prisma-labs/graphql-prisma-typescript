import _ from './env'

import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import { resolvers, fragmentReplacements } from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      fragmentReplacements,
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
      debug: true,
    }),
  }),
})

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)

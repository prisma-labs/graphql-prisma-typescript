import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import {
  resolvers,
  fragmentReplacements as resolverFragmentReplacements,
} from './resolvers'
import { permissions } from './permissions'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares: [permissions],
  context: ({
    request,
    response,
    fragmentReplacements: middlewareFragmentReplacements,
  }) => ({
    request,
    response,
    db: new Prisma({
      fragmentReplacements: [
        ...middlewareFragmentReplacements,
        ...resolverFragmentReplacements,
      ],
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
      debug: true,
    }),
  }),
})

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)

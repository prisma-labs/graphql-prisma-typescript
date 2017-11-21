import * as fs from 'fs'
import { GraphQLServer } from 'graphql-yoga'
import { Remote, collectTypeDefs, GraphcoolLink } from 'graphql-remote'
import { account } from './resolvers/Mutation/account'
import { User } from './resolvers/User'
import { Home } from './resolvers/Home'
import { ExperiencesByCity } from './resolvers/ExperiencesByCity'
import { Viewer } from './resolvers/Viewer'
import { homepage } from './resolvers/Query/homepage'
import { book } from './resolvers/Mutation/book'
import { addPaymentMethod } from './resolvers/Mutation/addPaymentMethod'

const graphcoolTypeDefs = fs.readFileSync('./schemas/db-service.graphql', {
  encoding: 'utf8',
})

const typeDefs = collectTypeDefs(
  graphcoolTypeDefs,
  fs.readFileSync('./src/schema.graphql', { encoding: 'utf8' }),
)

const resolvers = {
  Query: {
    ...homepage,
    viewer: () => ({}),
  },
  Viewer,
  ExperiencesByCity,
  Home,
  Mutation: {
    ...account,
    book,
    addPaymentMethod,
  },
  User,
}

const makeLink = () =>
  new GraphcoolLink(
    process.env.GRAPHCOOL_SERVICE_ID,
    process.env.GRAPHCOOL_TOKEN,
  )

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    remote: new Remote(makeLink(), { typeDefs: graphcoolTypeDefs }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))

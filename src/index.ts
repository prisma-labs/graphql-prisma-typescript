import { GraphQLServer } from 'graphql-yoga'
import { Remote, GraphcoolLink } from 'graphql-remote'
import { importSchema } from 'graphql-import'
import { loadSchema } from './utils'
import { account } from './resolvers/Mutation/account'
import { User } from './resolvers/User'
import { Home } from './resolvers/Home'
import { ExperiencesByCity } from './resolvers/ExperiencesByCity'
import { Viewer } from './resolvers/Viewer'
import { homepage } from './resolvers/Query/homepage'
import { book } from './resolvers/Mutation/book'
import { addPaymentMethod } from './resolvers/Mutation/addPaymentMethod'

const typeDefs = importSchema('./src/schema.graphql')

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

const graphcoolTypeDefs = importSchema('schemas/db-service.graphql')
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

import { auth } from './Mutation/auth'
import { Home } from './Home'
import { ExperiencesByCity } from './ExperiencesByCity'
import { Viewer } from './Viewer'
import { AuthPayload } from './AuthPayload'
import { homepage } from './Query/homepage'
import { book } from './Mutation/book'
import { addPaymentMethod } from './Mutation/addPaymentMethod'

export const resolvers = {
  Query: {
    ...homepage,
    viewer: () => ({}),
  },
  Mutation: {
    ...auth,
    book,
    addPaymentMethod,
  },
  Viewer,
  ExperiencesByCity,
  Home,
  AuthPayload,
}

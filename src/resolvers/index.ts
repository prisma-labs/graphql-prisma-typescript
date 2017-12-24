import { extractFragmentReplacements } from 'graphcool-binding'
import { auth } from './Mutation/auth'
import { Home } from './Home'
import { ExperiencesByCity } from './ExperiencesByCity'
import { Viewer } from './Viewer'
import { AuthPayload } from './AuthPayload'
import { Query } from './Query'
import { book } from './Mutation/book'
import { addPaymentMethod } from './Mutation/addPaymentMethod'

export const resolvers = {
  Query,
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

export const fragmentReplacements = extractFragmentReplacements(resolvers)

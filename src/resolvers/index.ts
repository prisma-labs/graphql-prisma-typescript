import { extractFragmentReplacements } from 'graphcool-binding'
import { Query } from './Query'
import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { Home } from './Home'
import { ExperiencesByCity } from './ExperiencesByCity'
import { Viewer } from './Viewer'
import { AuthPayload } from './AuthPayload'
import { book } from './Mutation/book'
import { addPaymentMethod } from './Mutation/addPaymentMethod'

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    book,
    addPaymentMethod,
  },
  Subscription,
  Viewer,
  ExperiencesByCity,
  Home,
  AuthPayload,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)

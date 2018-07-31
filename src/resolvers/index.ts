import { extractFragmentReplacements } from 'prisma-binding'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { Subscription } from './Subscription'
import { Home } from './Home'
import { ExperiencesByCity } from './ExperiencesByCity'
import { Viewer } from './Viewer'
import { MutationResult } from './MutationResult'
import { AuthPayload } from './AuthPayload'

export const resolvers = {
  Query,
  Mutation,
  Subscription,
  Viewer,
  ExperiencesByCity,
  Home,
  AuthPayload,
  MutationResult,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)

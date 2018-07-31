import { extractFragmentReplacements } from 'prisma-binding'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { Subscription } from './Subscription'
import { Home } from './Home'
import { ExperiencesByCity } from './ExperiencesByCity'
import { Viewer } from './Viewer'
import { MutationResult } from './MutationResult'
import { AuthPayload } from './AuthPayload'
import { City } from './City'
import { Experience } from './Experience'
import { User } from './User'
import { Picture } from './Picture'
import { Booking } from './Booking'

export const resolvers = {
  AuthPayload,
  Booking,
  City,
  Experience,
  ExperiencesByCity,
  Home,
  Mutation,
  MutationResult,
  Picture,
  Query,
  Subscription,
  Viewer,
  User,
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)

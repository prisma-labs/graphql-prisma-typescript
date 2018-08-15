import { IQuery } from '../generated/resolvers'
import { Types } from './types'

export interface QueryRoot {
}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: root => [],
  topHomes: (root, args, ctx) => {
    return ctx.db.query.places()
  },
  homesInPriceRange: (root, args) => [],
  topReservations: root => [],
  featuredDestinations: root => [],
  experiencesByCity: (root, args) => [],
  viewer: root => null,
  myLocation: root => null,
}

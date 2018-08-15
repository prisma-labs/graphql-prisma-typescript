import { IQuery } from '../generated/resolvers'
import { Types } from './types'
import { PlaceWhereInput } from '../generated/prisma'

export interface QueryRoot {}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: (root, args, ctx) => {
    return ctx.db.query.experiences({ orderBy: 'popularity_DESC' })
  },
  topHomes: (root, args, ctx) => {
    return ctx.db.query.places()
  },
  homesInPriceRange: (root, args, ctx) => {
    const where: PlaceWhereInput = {
      AND: [
        { pricing: { perNight_gte: args.min } },
        { pricing: { perNight_lte: args.max } },
      ],
    }
    return ctx.db.query.places({ where })
  },

  topReservations: root => [],
  featuredDestinations: root => [],
  experiencesByCity: (root, args) => [],
  viewer: root => null,
  myLocation: root => null,
}

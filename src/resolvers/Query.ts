import { IQuery } from '../generated/resolvers'
import { Types } from './types'
import { PlaceWhereInput } from '../generated/prisma'

export interface QueryRoot {}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: async (root, args, ctx) => {
    return ctx.db.experiences({
      orderBy: 'popularity_DESC',
    })
  },
  topHomes: (root, args, ctx) => {
    return ctx.db.places()
  },
  homesInPriceRange: (root, args, ctx) => {
    const where: PlaceWhereInput = {
      AND: [
        { pricing: { perNight_gte: args.min } },
        { pricing: { perNight_lte: args.max } },
      ],
    }
    return ctx.db.places({ where })
  },
  topReservations: (root, args, ctx) => {
    return ctx.db.restaurants({ orderBy: 'popularity_DESC' })
  },
  featuredDestinations: (root, args, ctx) => {
    return ctx.db.neighbourhoods({
      orderBy: 'popularity_DESC',
      where: { featured: true },
    })
  },
  experiencesByCity: (root, args, ctx) => {
    return ctx.db.cities({
      where: {
        name_in: args.cities,
        neighbourhoods_every: {
          locations_every: {
            experience: {
              id_gt: '0',
            },
          },
        },
      },
    })
  },
  viewer: root => ({}),
}

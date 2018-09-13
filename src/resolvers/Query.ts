import { IQuery } from '../generated/resolvers'
import { getUserId } from '../utils'
import { Types } from '../types/types'

export interface QueryRoot {}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: async (_root, _args, ctx) => {
    const experiences =
      (await ctx.db.experiences({ orderBy: 'popularity_DESC' })) || []

    return experiences.map(exp => {
      return {
        ...exp,
        location: null,
        category: null,
        reviews: null,
        preview: null,
      }
    })
  },
  topHomes: (_root, _args, ctx) => {
    return ctx.db.places({ orderBy: 'popularity_DESC' })
  },
  homesInPriceRange: (_root, { min, max }, ctx) => {
    const where = {
      AND: [
        { pricing: { perNight_gte: min } },
        { pricing: { perNight_lte: max } },
      ],
    }
    return ctx.db.places({ where })
  },
  topReservations: (_root, _args, ctx) => {
    return ctx.db.restaurants({ orderBy: 'popularity_DESC' })
  },
  featuredDestinations: (_root, _args, ctx) => {
    return ctx.db.neighbourhoods({
      orderBy: 'popularity_DESC',
      where: { featured: true },
    })
  },
  experiencesByCity: (root, { cities }, ctx) => {
    return ctx.db.cities({
      where: {
        name_in: cities,
        neighbourhoods_every: {
          id_gt: '0',
          locations_every: {
            id_gt: '0',
            experience: {
              id_gt: '0',
            },
          },
        },
      },
    })
  },
  viewer: () => ({
    me: null,
    bookings: null,
  }),
  myLocation: async (_root, _args, ctx) => {
    const id = getUserId(ctx)

    const locations = await ctx.db.locations({
      where: {
        user: {
          id,
        },
      },
    })

    return locations && locations[0]
  },
}

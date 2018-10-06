import { getUserId } from '../utils'
import { QueryResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  topExperiences: async (_parent, _args, ctx) => {
    return ctx.db.experiences({ orderBy: 'popularity_DESC' });
  },
  topHomes: (_parent, _args, ctx) => ctx.db.places({ orderBy: 'popularity_DESC' }),
  homesInPriceRange: (_parent, { min, max }, ctx) =>
    ctx.db.places({
      where: {
        AND: [
          { pricing: { perNight_gte: min } },
          { pricing: { perNight_lte: max } },
        ],
      },
    }),
  topReservations: (_parent, _args, ctx) =>
    ctx.db.restaurants({ orderBy: 'popularity_DESC' }),
  featuredDestinations: (_parent, _args, ctx) =>
    ctx.db.neighbourhoods({
      orderBy: 'popularity_DESC',
      where: { featured: true },
    }),
  experiencesByCity: (_parent, { cities }, ctx) =>
    ctx.db.cities({
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
    }),
  viewer: () => ({
    me: null,
    bookings: null,
  }),
  myLocation: async (_parent, _args, ctx) => {
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

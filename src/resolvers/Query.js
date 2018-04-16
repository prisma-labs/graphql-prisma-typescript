import { Context } from '../utils'

export const Query = {
  viewer: () => ({}),

  topExperiences: async (parent, args, ctx, info) => {
    return ctx.db.query.experiences({ orderBy: 'popularity_DESC' }, info)
  },

  topHomes: async (parent, args, ctx, info) => {
    return ctx.db.query.places({ orderBy: 'popularity_DESC' }, info)
  },

  homesInPriceRange: async (parent, args, ctx, info) => {
    const where = {
      AND: [
        { pricing: { perNight_gte: args.min } },
        { pricing: { perNight_lte: args.max } },
      ],
    }
    return ctx.db.query.places({ where }, info)
  },

  topReservations: async (parent, args, ctx, info) => {
    return ctx.db.query.restaurants({ orderBy: 'popularity_DESC' }, info)
  },

  featuredDestinations: async (parent, args, ctx, info) => {
    return ctx.db.query.neighbourhoods(
      { orderBy: 'popularity_DESC', where: { featured: true } },
      info,
    )
  },

  experiencesByCity: async (parent, { cities }, ctx, info) => {
    return ctx.db.query.cities({
      where: {
        name_in: cities,
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
}

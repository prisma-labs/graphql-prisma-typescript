import { Context } from '../utils'

export const Query = {
  viewer: () => ({}),

  topExperiences: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.experiences({ orderBy: 'popularity_DESC' }, info)
  },

  topHomes: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.places({ orderBy: 'popularity_DESC' }, info)
  },

  topReservations: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.reservations({ orderBy: 'popularity_DESC' }, info)
  },

  featuredDestinations: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.neighbourhoods(
      { orderBy: 'popularity_DESC', where: { featured: true } },
      info,
    )
  },

  experiencesByCity: async (parent, { cities }, ctx: Context, info) => {
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

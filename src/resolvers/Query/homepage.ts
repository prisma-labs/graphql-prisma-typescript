import { Context } from '../../utils'

export const homepage = {
  topExperiences: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.allExperiences({ orderBy: 'popularity_DESC' }, info)
  },

  topHomes: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.allPlaces({ orderBy: 'popularity_DESC' }, info)
  },

  topReservations: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.allReservations({ orderBy: 'popularity_DESC' }, info)
  },

  featuredDestinations: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.allNeighbourhoods(
      { orderBy: 'popularity_DESC', filter: { featured: true } },
      info,
    )
  },

  experiencesByCity: async (parent, { cities }, ctx: Context, info) => {
    return ctx.db.query.allCities({
      filter: {
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

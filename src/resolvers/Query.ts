import { Context, getUserId } from '../utils'
import { WrapQuery } from 'graphql-tools'
import { SelectionSetNode, Kind } from 'graphql'

export const Query = {
  viewer: () => ({}),

  myLocation: async (parent, args, ctx, info) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info, {
      transforms: [
        new WrapQuery(
          ['user'],
          (subtree: SelectionSetNode) => ({
            kind: Kind.FIELD,
            name: {
              kind: Kind.NAME,
              value: 'location',
            },
            selectionSet: subtree,
          }),
          // result => result && result.node,
          result => {
            // TODO clean me up
            console.log({ result })
            return result && result.node
          },
        ),
      ],
    })
  },

  topExperiences: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.experiences({ orderBy: 'popularity_DESC' }, info)
  },

  topHomes: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.places({ orderBy: 'popularity_DESC' }, info)
  },

  homesInPriceRange: async (parent, args, ctx: Context, info) => {
    const where = {
      AND: [
        { pricing: { perNight_gte: args.min } },
        { pricing: { perNight_lte: args.max } },
      ],
    }
    return ctx.db.query.places({ where }, info)
  },

  topReservations: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.restaurants({ orderBy: 'popularity_DESC' }, info)
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
          id_gt: "0",
          locations_every: {
            id_gt: "0",
            experience: {
              id_gt: '0',
            },
          },
        },
      },
    })
  },
}

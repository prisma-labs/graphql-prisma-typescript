import { Context } from '../utils'

export const Home = {
  numRatings: {
    fragment: `fragment NumRatings on Place { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const places = await ctx.db.query.places({ where: { id } })
      return places.length
    },
  },
}

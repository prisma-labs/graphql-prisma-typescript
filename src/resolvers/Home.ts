import { Context } from '../utils'

export const Home = {
  numRatings: {
    fragment: `fragment NumRatings on Place { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const result = await ctx.db.request(`
      {
        Place(id: "${id}") {
          _reviewsMeta {
            count
          }
        }
      }`)
      return result.Place._reviewsMeta.count
    },
  },
}

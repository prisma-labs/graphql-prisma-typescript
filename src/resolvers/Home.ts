import { Context } from '../utils'

export const Home = {
  numRatings: {
    fragment: `fragment NumRatings on Place { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const result = await ctx.db.query.Place(
        { id },
        `{ _reviewsMeta {
            count
          }
        }`,
      )
      return result._reviewsMeta.count
    },
  },
}

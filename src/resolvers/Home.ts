import { Context } from '../utils'

export const Home = {
  numRatings: {
    fragment: `fragment NumRatings on Place { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const reviews = await ctx.db.query.reviewsConnection(
        { where: { place: { id } } },
        `{ aggregate { count } }`,
      )
      return reviews.aggregate.count
    },
  },

  perNight: {
    fragment: `fragment PerNight on Place { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const place = await ctx.db.query.place(
        { where: { id } },
        `{ pricing { perNight } }`,
      )
      return place.pricing.perNight
    },
  },
}

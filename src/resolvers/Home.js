import { Context } from '../utils'

export const Home = {
  // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/1312
  numRatings: {
    fragment: `fragment NumRatings on Place { id }`,
    resolve: async ({ id }, args, ctx, info) => {
      const reviews = await ctx.db.query.reviewsConnection(
        { where: { place: { id } } },
        `{ aggregate { count } }`,
      )
      return reviews.aggregate.count
    },
  },

  perNight: {
    fragment: `fragment PerNight on Place { pricing { perNight } }`,
    resolve: ({ pricing: { perNight } }) => perNight,
  },

  // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/1312
  avgRating: {
    fragment: `fragment AvgRating on Place { reviews { stars } }`,
    resolve: ({ reviews }) => {
      if (reviews.length > 0) {
        return (
          reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length
        )
      }
      return null
    },
  },
}

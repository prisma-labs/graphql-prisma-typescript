import { Context } from '../utils'

export const Home = {
  numRatings: {
    fragment: `fragment NumRatings on Place { id }`,
    resolve: async ({ id }, args, ctx: Context, info) => {
      const places = await ctx.db.query.places({ where: { id } })
      return places.length
    },
  },
  perNight: {
    fragment: `fragment NumRatings on Place { id }`,
   	resolve: async ({ id }, args, ctx: Context, info) => {
      const place = await ctx.db.query.place({ where: { id } },`{ pricing { perNight } }`)
      return place.pricing.perNight
    },
},
}

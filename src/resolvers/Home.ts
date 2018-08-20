import { IHome } from '../generated/resolvers'
import { Types } from './types'

export interface HomeRoot {
  id: string
  name: string
  description: string
}

export const Home: IHome.Resolver<Types> = {
  id: root => root.id,
  name: root => root.name,
  description: root => root.description,

  numRatings: async (root, args, ctx) => {
    return ctx.db
      .reviewsConnection({ where: { place: { id: root.id } } })
      .aggregate()
      .count()
  },

  // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/1312
  avgRating: async (root, args, ctx) => {
    const reviews = await ctx.db.reviews({
      where: { place: { id: root.id } },
    })
    if (reviews.length > 0) {
      return reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length
    }
    return null
  },

  pictures: async (root, args, ctx) => {
    return ctx.db.place({ id: root.id }).pictures({ first: args.first })
  },

  perNight: async (root, args, ctx) => {
    // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/2836
    const pricings = await ctx.db.pricings({
      where: { place: { id: root.id } },
    })
    return pricings[0].perNight
  },
}

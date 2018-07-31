import { Context } from '../utils'
import { IHome } from '../generated/schema'
import { PictureRoot } from './Picture'

export interface HomeRoot {
  id: string
  name: string
  description: string
}

export const Home: IHome.Resolver<Context, HomeRoot, PictureRoot> = {
  id: root => root.id,
  name: root => root.name,
  description: root => root.description,

  numRatings: async (root, args, ctx) => {
    return ctx.db.query
      .reviewsConnection({ where: { place: { id: root.id } } })
      .aggregate()
      .count()
  },

  // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/1312
  avgRating: async (root, args, ctx) => {
    const reviews = await ctx.db.query.reviews({
      where: { place: { id: root.id } },
    })
    if (reviews.length > 0) {
      return reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length
    }
    return null
  },

  pictures: async (root, args, ctx) => {
    return ctx.db.query
      .place({ where: { id: root.id } })
      .pictures({ first: args.first })
  },

  perNight: async (root, args, ctx) => {
    // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/2836
    const pricings = await ctx.db.query.pricings({
      where: { place: { id: root.id } },
    })
    return pricings[0].perNight
  },
}

// export class Home implements IHome<{}, HomeRoot, PictureRoot> {
//   id = root => root.id
//   name = root => root.name
//   description = root => root.description
//   numRatings = root => root.numRatings
//   avgRating = root => root.avgRating
//   pictures = (): PictureRoot[] => []
//   perNight = root => root.perNight
// }

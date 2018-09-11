import { IHome } from '../generated/resolvers'
import { Types } from './types'
import { PictureRoot } from './Picture'

export interface HomeRoot {
  id: string
  name?: string
  description: string
  numRatings: number
  avgRating?: number
  pictures: PictureRoot[]
  perNight: number
}

export const Home: IHome.Resolver<Types> = {
  id: root => root.id,
  name: root => root.name,
  description: root => root.description,
  avgRating: async (root, _args, ctx) => {
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
  numRatings: async (root, _args, ctx) => {
    return ctx.db
      .reviewsConnection({ where: { place: { id: root.id } } })
      .aggregate()
      .count()
  },
  perNight: async (root, args, ctx) => {
    // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/2836
    const pricings = await ctx.db.pricings({
      where: { place: { id: root.id } },
    })
    return pricings[0].perNight
  },
}

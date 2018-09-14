import { HomeResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { PictureParent } from './Picture'

export interface HomeParent {
  id: string
  name?: string
  description: string
  numRatings: number
  avgRating?: number
  pictures: PictureParent[]
  perNight: number
}

export const Home: HomeResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name,
  description: parent => parent.description,
  numRatings: (parent, _args, ctx) =>
    ctx.db
      .reviewsConnection({ where: { place: { id: parent.id } } })
      .aggregate()
      .count(),
  avgRating: async (parent, _args, ctx) => {
    const reviews = await ctx.db.reviews({
      where: { place: { id: parent.id } },
    })
    if (reviews.length > 0) {
      return reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length
    }
    return null
  },
  pictures: (parent, args, ctx) =>
    ctx.db.place({ id: parent.id }).pictures({ first: args.first }),
  perNight: async (parent, _args, ctx) => {
    // TODO rewrite this once this lands: https://github.com/prisma/prisma/issues/2836
    const pricings = await ctx.db.pricings({
      where: { place: { id: parent.id } },
    })

    return pricings[0].perNight
  },
}

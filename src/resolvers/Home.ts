import { Context } from '../utils'
import { IHome } from '../generated/schema/Home'
import { PictureRoot } from './Picture'

// TODO better naming convention (HomeRoot?)
export interface HomeRoot {
  id: string
  name: string
  description: string
}

export const Home: IHome<{}, HomeRoot, PictureRoot> = {
  id: (root: HomeRoot) => root.id,
  name: (root: HomeRoot) => root.name,
  description: (root: HomeRoot) => root.description,

  numRatings: async (root: HomeRoot, args: {}, ctx: Context) => {
    return ctx.db.query
      .reviewsConnection({ where: { place: { id: root.id } } })
      .aggregate()
      .count()
  },

  // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/1312
  avgRating: async (root: HomeRoot, args: {}, ctx: Context) => {
    const reviews = await ctx.db.query.reviews({
      where: { place: { id: root.id } },
    })
    if (reviews.length > 0) {
      return reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length
    }
    return null
  },

  pictures: async (
    root: HomeRoot,
    args: {},
    ctx: Context,
  ): Promise<PictureRoot[]> => {
    return ctx.db.query.place({ where: { id: root.id } }).pictures()
  },

  perNight: async (root: HomeRoot, args: {}, ctx: Context) => {
    // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/2836
    const pricings = await ctx.db.query.pricings({
      where: { place: { id: root.id } },
    })
    return pricings[0].perNight
  },
}

// export class Home implements IHome<{}, HomeRoot, PictureRoot> {
//   id = (root: HomeRoot) => root.id
//   name = (root: HomeRoot) => root.name
//   description = (root: HomeRoot) => root.description
//   numRatings = (root: HomeRoot) => root.numRatings
//   avgRating = (root: HomeRoot) => root.avgRating
//   pictures = (): PictureRoot[] => []
//   perNight = (root: HomeRoot) => root.perNight
// }

import { Context } from '../utils'
import gql from 'graphql-tag'
import { IHome } from '../generated/schema/Home'
import { PictureScalars } from './Picture'
import { picturesForPlace, reviewsCountForPlace } from '../generated/equeries'

// TODO better naming convention (HomeRoot?)
export interface HomeScalars {
  id: string
  name: string
  description: string
}

export const Home: IHome<{}, HomeScalars, PictureScalars> = {
  id: (root: HomeScalars) => root.id,
  name: (root: HomeScalars) => root.name,
  description: (root: HomeScalars) => root.description,

  // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/1312
  numRatings: async (root: HomeScalars, args: {}, ctx: Context) => {
    const query = gql`
      query reviewsCountForPlace($where: ReviewWhereInput!) {
        reviewsConnection(where: $where) {
          aggregate {
            count
          }
        }
      }
    `
    const result = await ctx.db.request<reviewsCountForPlace>(query, {
      where: { place: { id: root.id } },
    })
    return result.reviewsConnection.aggregate.count
  },

  // TODO rewrite this once this lands: https://github.com/graphcool/prisma/issues/1312
  avgRating: async (root: HomeScalars, args: {}, ctx: Context) => {
    const reviews = await ctx.db.query.reviews({
      where: { place: { id: root.id } },
    })
    if (reviews.length > 0) {
      return reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length
    }
    return null
  },

  pictures: async (
    root: HomeScalars,
    args: {},
    ctx: Context,
  ): Promise<PictureScalars[]> => {
    // TODO doesn't work
    // return ctx.db.query.pictures({where: { place: { } }})

    // TODO other approach
    // const place = await ctx.db.query.place({ where: { id: root.id } }, gql`{}`)

    // SOLUTION add backrelation
    const query = gql`
      query picturesForPlace($id: String!) {
        place(where: { id: $id }) {
          pictures {
            url
          }
        }
      }
    `
    const { place } = await ctx.db.request<picturesForPlace>(query, {
      id: root.id,
    })
    return place.pictures
  },

  perNight: async (root: HomeScalars, args: {}, ctx: Context) => {
    // SOLUTION embedded types
    const pricings = await ctx.db.query.pricings({
      where: { place: { id: root.id } },
    })
    return pricings[0].perNight
  },
}

// export class Home implements IHome<{}, HomeScalars, PictureScalars> {
//   id = (root: HomeScalars) => root.id
//   name = (root: HomeScalars) => root.name
//   description = (root: HomeScalars) => root.description
//   numRatings = (root: HomeScalars) => root.numRatings
//   avgRating = (root: HomeScalars) => root.avgRating
//   pictures = (): PictureScalars[] => []
//   perNight = (root: HomeScalars) => root.perNight
// }

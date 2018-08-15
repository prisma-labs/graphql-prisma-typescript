import { IHome } from './src/generated/resolvers'
import { Types } from './types'
import { PictureRoot } from './Picture'

export interface HomeRoot {
  id: string
  name: string | null
  description: string
  numRatings: number
  avgRating: number | null
  pictures: PictureRoot[]
  perNight: number
}

export const Home: IHome.Resolver<Types> = {
  id: root => root.id,
  name: root => root.name,
  description: root => root.description,
  numRatings: root => root.numRatings,
  avgRating: root => root.avgRating,
  pictures: (root, args) => root.pictures,
  perNight: root => root.perNight,
}

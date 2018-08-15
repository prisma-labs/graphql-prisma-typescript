import { IHome } from './generated/interfaces'
import { Types } from './types'

import { PictureRoot } from './Picture'

export interface HomeRoot {
  id: string
  name: string
  description: string
  numRatings: number
  avgRating: number
  pictures: PictureRoot[]
  perNight: number
}

export const Home: IHome.Resolver<Types> = {
  id: async root => root.id,
  name: async root => root.name,
  description: async root => root.description,
  numRatings: async root => root.numRatings,
  avgRating: async root => root.avgRating,
  pictures: async (root, args) => root.pictures,
  perNight: async root => root.perNight,
}

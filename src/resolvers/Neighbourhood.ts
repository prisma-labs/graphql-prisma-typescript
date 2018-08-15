import { INeighbourhood } from './generated/interfaces.ts'
import { Types } from './types'

import { PictureRoot } from './Picture'
import { CityRoot } from './City'

export interface NeighbourhoodRoot {
  id: string
  name: string
  slug: string
  homePreview: PictureRoot
  city: CityRoot
  featured: boolean
  popularity: number
}

export const Neighbourhood: INeighbourhood.Resolver<Types> = {
  id: async root => root.id,
  name: async root => root.name,
  slug: async root => root.slug,
  homePreview: async root => root.homePreview,
  city: async root => root.city,
  featured: async root => root.featured,
  popularity: async root => root.popularity,
}

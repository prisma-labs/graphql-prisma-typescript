import { INeighbourhood } from '../generated/resolvers'
import { Types } from './types'
import { PictureRoot } from './Picture'
import { CityRoot } from './City'

export interface NeighbourhoodRoot {
  id: string
  name: string
  slug: string
  homePreview?: PictureRoot
  city: CityRoot
  featured: boolean
  popularity: number
}

export const Neighbourhood: INeighbourhood.Resolver<Types> = {
  id: root => root.id,
  name: root => root.name,
  slug: root => root.slug,
  homePreview: (root, _args, ctx) =>
    ctx.db.neighbourhood({ id: root.id }).homePreview(),
  city: (root, _args, ctx) =>
    ctx.db.neighbourhood({ id: root.id }).city(),
  featured: root => root.featured,
  popularity: root => root.popularity,
}

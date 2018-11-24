import { NeighbourhoodResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface NeighbourhoodParent {
  id: string
  name: string
  slug: string
  featured: boolean
  popularity: number
}

export const Neighbourhood: NeighbourhoodResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name,
  slug: parent => parent.slug,
  homePreview: (parent, _args, ctx) =>
    ctx.db.neighbourhood({ id: parent.id }).homePreview(),
  city: (parent, _args, ctx) => ctx.db.neighbourhood({ id: parent.id }).city(),
  featured: parent => parent.featured,
  popularity: parent => parent.popularity,
}

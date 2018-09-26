import { ExperienceResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { ExperienceCategoryParent } from './ExperienceCategory'
import { LocationParent } from './Location'
import { ReviewParent } from './Review'
import { PictureParent } from './Picture'

export interface ExperienceParent {
  id: string
  category?: ExperienceCategoryParent
  title: string
  location: LocationParent
  pricePerPerson: number
  reviews: ReviewParent[]
  preview: PictureParent
  popularity: number
}

export const Experience: ExperienceResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  category: (parent, _args, ctx) =>
    ctx.db.experience({ id: parent.id }).category(),
  title: parent => parent.title,
  location: (parent, _args, ctx) =>
    ctx.db.experience({ id: parent.id }).location(),
  pricePerPerson: parent => parent.pricePerPerson,
  reviews: (parent, _args, ctx) =>
    ctx.db.experience({ id: parent.id }).reviews(),
  preview: (parent, _args, ctx) =>
    ctx.db.experience({ id: parent.id }).preview(),
  popularity: parent => parent.popularity,
}

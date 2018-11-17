import { ExperienceResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface ExperienceParent {
  id: string
  title: string
  pricePerPerson: number
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

import { ExperienceCategoryResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface ExperienceCategoryParent {
  id: string
  mainColor: string
  name: string
}

export const ExperienceCategory: ExperienceCategoryResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  mainColor: parent => parent.mainColor,
  name: parent => parent.name,
  experience: (parent, args, ctx) => ctx.db.experienceCategory({ id: parent.id }).experience(),
}

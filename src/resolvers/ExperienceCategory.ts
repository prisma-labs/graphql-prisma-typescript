import { IExperienceCategory } from '../generated/resolvers'
import { Types } from './types'

export interface ExperienceCategoryRoot {
  id: string
  mainColor: string
  name: string
}

export const ExperienceCategory: IExperienceCategory.Resolver<Types> = {
  id: root => root.id,
  mainColor: root => root.mainColor,
  name: root => root.name,
  experience: (root, args, ctx) =>
    ctx.db.query.experienceCategory({ where: { id: root.id } }).experience(),
}

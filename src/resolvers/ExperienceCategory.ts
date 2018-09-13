import { IExperienceCategory } from '../generated/resolvers'
import { Types } from '../types/types'
import { ExperienceRoot } from './Experience'

export interface ExperienceCategoryRoot {
  id: string
  mainColor: string
  name: string
  experience?: ExperienceRoot
}

export const ExperienceCategory: IExperienceCategory.Resolver<Types> = {
  id: root => root.id,
  mainColor: root => root.mainColor,
  name: root => root.name,
  experience: root => root.experience,
}

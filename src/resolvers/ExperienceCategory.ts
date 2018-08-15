import { IExperienceCategory } from './generated/interfaces.ts'
import { Types } from './types'

import { ExperienceRoot } from './Experience'

export interface ExperienceCategoryRoot {
  id: string
  mainColor: string
  name: string
  experience: ExperienceRoot
}

export const ExperienceCategory: IExperienceCategory.Resolver<Types> = {
  id: async root => root.id,
  mainColor: async root => root.mainColor,
  name: async root => root.name,
  experience: async root => root.experience,
}

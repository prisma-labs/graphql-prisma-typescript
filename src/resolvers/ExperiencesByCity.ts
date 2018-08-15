import { IExperiencesByCity } from './generated/interfaces'
import { Types } from './types'

import { ExperienceRoot } from './Experience'
import { CityRoot } from './City'

export interface ExperiencesByCityRoot {
  experiences: ExperienceRoot[]
  city: CityRoot
}

export const ExperiencesByCity: IExperiencesByCity.Resolver<Types> = {
  experiences: async root => root.experiences,
  city: async root => root.city,
}

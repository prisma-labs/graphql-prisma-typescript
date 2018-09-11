import { IExperiencesByCity } from '../generated/resolvers'
import { Types } from './types'
import { ExperienceRoot } from './Experience'
import { CityRoot } from './City'

export interface ExperiencesByCityRoot {
  experiences: ExperienceRoot[]
  city: CityRoot
}

export const ExperiencesByCity: IExperiencesByCity.Resolver<Types> = {
  experiences: root => root.experiences,
  city: root => root.city,
}

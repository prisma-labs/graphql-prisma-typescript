import { IExperiencesByCity } from '../generated/resolvers'
import { Types } from './types'
import { CityRoot } from './City'

export type ExperiencesByCityRoot = CityRoot

export const ExperiencesByCity: IExperiencesByCity.Resolver<Types> = {
  experiences: (root, args, ctx) =>
    ctx.db.experiences({
      where: {
        location: { neighbourHood: { city: { id: root.id } } },
      },
    }),
  city: root => root,
}

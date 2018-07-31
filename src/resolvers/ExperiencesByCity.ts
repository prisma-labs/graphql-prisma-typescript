import { Context } from '../utils'
import { IExperiencesByCity } from '../generated/schema/ExperiencesByCity'
import { ExperienceRoot } from './Experience'
import { CityRoot } from './City'

export interface ExperiencesByCityRoot {
  id: string
}

export const ExperiencesByCity: IExperiencesByCity<
  Context,
  ExperiencesByCityRoot,
  ExperienceRoot,
  CityRoot
> = {
  city: async ({ id }: ExperiencesByCityRoot, args: {}, ctx: Context) => {
    return ctx.db.query.city({ where: { id } })
  },

  experiences: async (
    { id }: ExperiencesByCityRoot,
    args: {},
    ctx: Context,
  ) => {
    return ctx.db.query.experiences({
      where: { location: { neighbourHood: { city: { id } } } },
    })
  },
}

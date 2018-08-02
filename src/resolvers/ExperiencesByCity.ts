import { Context } from '../utils'
import { IExperiencesByCity } from '../generated/schema'
import { Types } from '../types'

export interface ExperiencesByCityRoot {
  id: string
}

export const ExperiencesByCity: IExperiencesByCity.Resolver<Types> = {
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

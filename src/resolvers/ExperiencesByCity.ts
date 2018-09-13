import { IExperiencesByCity } from '../generated/resolvers'
import { Types } from '../types/types'
import { ExperienceRoot } from './Experience'
import { CityRoot } from './City'

export interface ExperiencesByCityRoot {
  id: string
  experiences: ExperienceRoot[]
  city: CityRoot
}

export const ExperiencesByCity: IExperiencesByCity.Resolver<Types> = {
  experiences: async (parent, _args, ctx) => {
    const id = parent.id
    const exps = await ctx.db.experiences({
      where: {
        location: {
          id_gt: '0',
          neighbourHood: {
            city: {
              id,
            },
          },
        },
      },
    })

    return exps.map(exp => {
      return {
        ...exp,
        location: null,
        category: null,
        reviews: null,
        preview: null,
      }
    })
  },
  city: (root, _args, ctx) => {
    return ctx.db.city({ id: root.id })
  },
}

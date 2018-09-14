import { ExperiencesByCityResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { ExperienceParent } from './Experience'
import { CityParent } from './City'

export interface ExperiencesByCityParent {
  id: string
  experiences: ExperienceParent[]
  city: CityParent
}

export const ExperiencesByCity: ExperiencesByCityResolvers.Type<TypeMap> = {
  experiences: async (parent, _args, ctx) => {
    const exps = await ctx.db.experiences({
      where: {
        location: {
          id_gt: '0',
          neighbourHood: {
            city: {
              id: parent.id,
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
  city: (parent, _args, ctx) => ctx.db.city({ id: parent.id }),
}

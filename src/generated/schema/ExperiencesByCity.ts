import { ITypes, ResolverFn } from '.'

export namespace IExperiencesByCity {
  export type ExperiencesResolver<T extends ITypes> = ResolverFn<
    T['ExperiencesByCityRoot'],
    {},
    T['Context'],
    T['ExperienceRoot'][]
  >

  export type CityResolver<T extends ITypes> = ResolverFn<
    T['ExperiencesByCityRoot'],
    {},
    T['Context'],
    T['CityRoot']
  >

  export interface Resolver<T extends ITypes> {
    experiences: ExperiencesResolver<T>
    city: CityResolver<T>
  }
}

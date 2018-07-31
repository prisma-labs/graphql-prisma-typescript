import { GraphQLResolveInfo } from 'graphql'

export namespace IExperiencesByCity {
  export interface Resolver<
    Ctx,
    ExperiencesByCityRoot,
    ExperienceRoot,
    CityRoot
  > {
    experiences: (
      root: ExperiencesByCityRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => ExperienceRoot[] | Promise<ExperienceRoot[]>

    city: (
      root: ExperiencesByCityRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => CityRoot | Promise<CityRoot>
  }
}

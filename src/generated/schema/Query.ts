import { GraphQLResolveInfo } from 'graphql'

export namespace IQuery {
  export interface ArgsHomesInPriceRange {
    min: number
    max: number
  }

  export interface Resolver<Ctx, QueryRoot, HomeRoot> {
    topHomes: (
      root: QueryRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => HomeRoot[] | Promise<HomeRoot[]>

    homesInPriceRange: (
      root: QueryRoot,
      args: ArgsHomesInPriceRange,
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => HomeRoot[] | Promise<HomeRoot[]>
  }
}

// topExperiences: [Experience!]!
// topReservations: [Reservation!]!
// featuredDestinations: [Neighbourhood!]!
// experiencesByCity(cities: [String!]!): [ExperiencesByCity!]!
// viewer: Viewer
// myLocation: Location

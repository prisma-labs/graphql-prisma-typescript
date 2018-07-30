import { GraphQLResolveInfo } from 'graphql'

export interface Query_homesInPriceRange_arg {
  min: number
  max: number
}

export interface IQuery<Ctx, QueryRoot, HomeRoot> {
  topHomes: (
    root: QueryRoot,
    args: {},
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => HomeRoot[] | Promise<HomeRoot[]>

  homesInPriceRange: (
    root: QueryRoot,
    args: Query_homesInPriceRange_arg,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => HomeRoot[] | Promise<HomeRoot[]>

  // topExperiences: [Experience!]!
  // topHomes: [Home!]!
  // homesInPriceRange(min: Int!, max: Int!): [Home!]!
  // topReservations: [Reservation!]!
  // featuredDestinations: [Neighbourhood!]!
  // experiencesByCity(cities: [String!]!): [ExperiencesByCity!]!
  // viewer: Viewer
  // myLocation: Location
}
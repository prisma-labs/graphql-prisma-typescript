import { ITypes, ResolverFn } from '.'

export namespace IQuery {
  export interface ArgsHomesInPriceRange {
    min: number
    max: number
  }

  export type TopHomesResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    {},
    T['Context'],
    T['HomeRoot'][]
  >

  export type HomesInPriceRangeResolver<T extends ITypes> = ResolverFn<
    T['QueryRoot'],
    ArgsHomesInPriceRange,
    T['Context'],
    T['HomeRoot'][]
  >

  export interface Resolver<T extends ITypes> {
    topHomes: TopHomesResolver<T>
    homesInPriceRange: HomesInPriceRangeResolver<T>
  }
}

// topExperiences: [Experience!]!
// topReservations: [Reservation!]!
// featuredDestinations: [Neighbourhood!]!
// experiencesByCity(cities: [String!]!): [ExperiencesByCity!]!
// viewer: Viewer
// myLocation: Location

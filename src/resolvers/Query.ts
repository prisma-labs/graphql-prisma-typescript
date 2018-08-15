import { IQuery } from './generated/interfaces'
import { Types } from './types'

import { ExperienceRoot } from './Experience'
import { HomeRoot } from './Home'
import { ReservationRoot } from './Reservation'
import { NeighbourhoodRoot } from './Neighbourhood'
import { ExperiencesByCityRoot } from './ExperiencesByCity'
import { ViewerRoot } from './Viewer'
import { LocationRoot } from './Location'

export interface QueryRoot {
  topExperiences: ExperienceRoot[]
  topHomes: HomeRoot[]
  homesInPriceRange: HomeRoot[]
  topReservations: ReservationRoot[]
  featuredDestinations: NeighbourhoodRoot[]
  experiencesByCity: ExperiencesByCityRoot[]
  viewer: ViewerRoot
  myLocation: LocationRoot
}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: async root => root.topExperiences,
  topHomes: async root => root.topHomes,
  homesInPriceRange: async (root, args) => root.homesInPriceRange,
  topReservations: async root => root.topReservations,
  featuredDestinations: async root => root.featuredDestinations,
  experiencesByCity: async (root, args) => root.experiencesByCity,
  viewer: async root => root.viewer,
  myLocation: async root => root.myLocation,
}

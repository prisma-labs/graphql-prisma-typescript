import { IQuery } from './src/generated/resolvers'
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
  viewer: ViewerRoot | null
  myLocation: LocationRoot | null
}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: root => root.topExperiences,
  topHomes: root => root.topHomes,
  homesInPriceRange: (root, args) => root.homesInPriceRange,
  topReservations: root => root.topReservations,
  featuredDestinations: root => root.featuredDestinations,
  experiencesByCity: (root, args) => root.experiencesByCity,
  viewer: root => root.viewer,
  myLocation: root => root.myLocation,
}

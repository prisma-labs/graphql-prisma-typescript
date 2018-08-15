import { IReservation } from './generated/interfaces.ts'
import { Types } from './types'

import { PictureRoot } from './Picture'
import { LocationRoot } from './Location'

export interface ReservationRoot {
  id: string
  title: string
  avgPricePerPerson: number
  pictures: PictureRoot[]
  location: LocationRoot
  isCurated: boolean
  slug: string
  popularity: number
}

export const Reservation: IReservation.Resolver<Types> = {
  id: async root => root.id,
  title: async root => root.title,
  avgPricePerPerson: async root => root.avgPricePerPerson,
  pictures: async root => root.pictures,
  location: async root => root.location,
  isCurated: async root => root.isCurated,
  slug: async root => root.slug,
  popularity: async root => root.popularity,
}

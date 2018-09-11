import { IReservation } from '../generated/resolvers'
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
  id: root => root.id,
  title: root => root.title,
  avgPricePerPerson: root => root.avgPricePerPerson,
  pictures: (root, _args, ctx) => {
    return ctx.db.restaurant({ id: root.id }).pictures()
  },
  location: (root, _args, ctx) => {
    return ctx.db.restaurant({ id: root.id }).location()
  },
  isCurated: root => root.isCurated,
  slug: root => root.slug,
  popularity: root => root.popularity,
}

import { IReservation } from '../generated/resolvers'
import { Types } from './types'

export interface ReservationRoot {
  id: string
  title: string
  avgPricePerPerson: number
  isCurated: boolean
  slug: string
  popularity: number
}

export const Reservation: IReservation.Resolver<Types> = {
  id: root => root.id,
  title: root => root.title,
  avgPricePerPerson: root => root.avgPricePerPerson,
  pictures: (root, args, ctx) => {
    return ctx.db.restaurant({ id: root.id }).pictures()
  },
  location: (root, args, ctx) => {
    return ctx.db.restaurant({ id: root.id }).location()
  },
  isCurated: root => root.isCurated,
  slug: root => root.slug,
  popularity: root => root.popularity,
}

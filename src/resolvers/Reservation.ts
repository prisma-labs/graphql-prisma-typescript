import { ReservationResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface ReservationParent {
  id: string
  title: string
  avgPricePerPerson: number
  isCurated: boolean
  slug: string
  popularity: number
}

export const Reservation: ReservationResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  title: parent => parent.title,
  avgPricePerPerson: parent => parent.avgPricePerPerson,
  pictures: (parent, _args, ctx) =>
    ctx.db.restaurant({ id: parent.id }).pictures(),
  location: (parent, _args, ctx) =>
    ctx.db.restaurant({ id: parent.id }).location(),
  isCurated: parent => parent.isCurated,
  slug: parent => parent.slug,
  popularity: parent => parent.popularity,
}

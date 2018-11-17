import { BookingResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface BookingParent {
  id: string
  createdAt: string
  startDate: string
  endDate: string
}

export const Booking: BookingResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  bookee: (parent, _args, ctx) =>
  ctx.db.booking({ id: parent.id }).bookee(),
  place: (parent, _args, ctx) =>
  ctx.db.booking({ id: parent.id }).place(),
  startDate: parent => parent.startDate,
  endDate: parent => parent.endDate,
  payment: (parent, _args, ctx) =>
  ctx.db.booking({ id: parent.id }).payment(),
}

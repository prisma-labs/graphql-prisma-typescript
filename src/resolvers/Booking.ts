import { IBooking } from '../generated/resolvers'
import { Types } from './types'

export interface BookingRoot {
  id: string
  createdAt: string
  startDate: string
  endDate: string
}

export const Booking: IBooking.Resolver<Types> = {
  id: root => root.id,
  createdAt: root => root.createdAt,
  bookee: (root, args, ctx) =>
    ctx.db.query.booking({ where: { id: root.id } }).bookee(),
  place: (root, args, ctx) =>
    ctx.db.query.booking({ where: { id: root.id } }).place(),
  startDate: root => root.startDate,
  endDate: root => root.endDate,
  payment: (root, args, ctx) =>
    ctx.db.query.booking({ where: { id: root.id } }).payment(),
}

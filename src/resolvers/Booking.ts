import { IBooking } from '../generated/resolvers'
import { Types } from './types'
import { UserRoot } from './User'
import { PlaceRoot } from './Place'
import { PaymentRoot } from './Payment'

export interface BookingRoot {
  id: string
  createdAt: string
  bookee: UserRoot
  place: PlaceRoot
  startDate: string
  endDate: string
  payment: PaymentRoot
}

export const Booking: IBooking.Resolver<Types> = {
  id: root => root.id,
  createdAt: root => root.createdAt,
  bookee: root => root.bookee,
  place: root => root.place,
  startDate: root => root.startDate,
  endDate: root => root.endDate,
  payment: root => root.payment,
}

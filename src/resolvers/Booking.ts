import { IBooking } from './generated/interfaces.ts'
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
  id: async root => root.id,
  createdAt: async root => root.createdAt,
  bookee: async root => root.bookee,
  place: async root => root.place,
  startDate: async root => root.startDate,
  endDate: async root => root.endDate,
  payment: async root => root.payment,
}

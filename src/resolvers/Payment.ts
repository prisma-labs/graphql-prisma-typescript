import { IPayment } from './generated/interfaces'
import { Types } from './types'

import { BookingRoot } from './Booking'
import { PaymentAccountRoot } from './PaymentAccount'

export interface PaymentRoot {
  booking: BookingRoot
  createdAt: string
  id: string
  paymentMethod: PaymentAccountRoot
  serviceFee: number
}

export const Payment: IPayment.Resolver<Types> = {
  booking: async root => root.booking,
  createdAt: async root => root.createdAt,
  id: async root => root.id,
  paymentMethod: async root => root.paymentMethod,
  serviceFee: async root => root.serviceFee,
}

import { IPayment } from './src/generated/resolvers'
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
  booking: root => root.booking,
  createdAt: root => root.createdAt,
  id: root => root.id,
  paymentMethod: root => root.paymentMethod,
  serviceFee: root => root.serviceFee,
}

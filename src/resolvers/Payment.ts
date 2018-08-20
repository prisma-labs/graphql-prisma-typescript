import { IPayment } from '../generated/resolvers'
import { Types } from './types'

export interface PaymentRoot {
  createdAt: string
  id: string
  serviceFee: number
}

export const Payment: IPayment.Resolver<Types> = {
  booking: (root, args, ctx) => ctx.db.payment({ id: root.id }).booking(),
  createdAt: root => root.createdAt,
  id: root => root.id,
  paymentMethod: (root, args, ctx) =>
    ctx.db.payment({ id: root.id }).paymentMethod(),
  serviceFee: root => root.serviceFee,
}

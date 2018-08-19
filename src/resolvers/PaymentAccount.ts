import { IPaymentAccount } from '../generated/resolvers'
import { Types } from './types'

export type PAYMENT_PROVIDER = 'PAYPAL' | 'CREDIT_CARD'

export interface PaymentAccountRoot {
  id: string
  createdAt: string
  type: PAYMENT_PROVIDER | null
}

export const PaymentAccount: IPaymentAccount.Resolver<Types> = {
  id: root => root.id,
  createdAt: root => root.createdAt,
  type: root => root.type,
  user: (root, args, ctx) =>
    ctx.db.query.paymentAccount({ where: { id: root.id } }).user(),
  payments: (root, args, ctx) =>
    ctx.db.query.paymentAccount({ where: { id: root.id } }).payments(),
  paypal: (root, args, ctx) =>
    ctx.db.query.paymentAccount({ where: { id: root.id } }).paypal(),
  creditcard: (root, args, ctx) =>
    ctx.db.query.paymentAccount({ where: { id: root.id } }).creditcard(),
}

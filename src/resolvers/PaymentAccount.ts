import { PaymentAccountResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export type PAYMENT_PROVIDER = 'PAYPAL' | 'CREDIT_CARD'

export interface PaymentAccountParent {
  id: string
  createdAt: string
  type?: PAYMENT_PROVIDER
}

export const PaymentAccount: PaymentAccountResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  type: parent => parent.type,
  user: (parent, args, ctx) => ctx.db.paymentAccount({ id: parent.id }).user(),
  payments: (parent, args, ctx) => ctx.db.paymentAccount({ id: parent.id }).payments(),
  paypal: (parent, args, ctx) => ctx.db.paymentAccount({ id: parent.id }).paypal(),
  creditcard: (parent, args, ctx) => ctx.db.paymentAccount({ id: parent.id }).creditcard(),
}

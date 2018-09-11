import { ICreditCardInformation } from '../generated/resolvers'
import { Types } from './types'
import { PaymentAccountRoot } from './PaymentAccount'

export interface CreditCardInformationRoot {
  cardNumber: string
  country: string
  createdAt: string
  expiresOnMonth: number
  expiresOnYear: number
  firstName: string
  id: string
  lastName: string
  paymentAccount?: PaymentAccountRoot
  postalCode: string
  securityCode: string
}

export const CreditCardInformation: ICreditCardInformation.Resolver<Types> = {
  cardNumber: root => root.cardNumber,
  country: root => root.country,
  createdAt: root => root.createdAt,
  expiresOnMonth: root => root.expiresOnMonth,
  expiresOnYear: root => root.expiresOnYear,
  firstName: root => root.firstName,
  id: root => root.id,
  lastName: root => root.lastName,
  paymentAccount: (root, _args, ctx) => ctx.db.creditCardInformation({ id: root.id }).paymentAccount(),
  postalCode: root => root.postalCode,
  securityCode: root => root.securityCode,
}

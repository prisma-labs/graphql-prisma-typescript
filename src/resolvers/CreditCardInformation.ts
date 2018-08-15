import { ICreditCardInformation } from './generated/interfaces.ts'
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
  paymentAccount: PaymentAccountRoot
  postalCode: string
  securityCode: string
}

export const CreditCardInformation: ICreditCardInformation.Resolver<Types> = {
  cardNumber: async root => root.cardNumber,
  country: async root => root.country,
  createdAt: async root => root.createdAt,
  expiresOnMonth: async root => root.expiresOnMonth,
  expiresOnYear: async root => root.expiresOnYear,
  firstName: async root => root.firstName,
  id: async root => root.id,
  lastName: async root => root.lastName,
  paymentAccount: async root => root.paymentAccount,
  postalCode: async root => root.postalCode,
  securityCode: async root => root.securityCode,
}

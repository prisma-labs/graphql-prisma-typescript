import { IPaymentAccount } from './generated/interfaces'
import { Types } from './types'

export type PAYMENT_PROVIDERRoot = 'PAYPAL' | 'CREDIT_CARD'

import { UserRoot } from './User'
import { PaymentRoot } from './Payment'
import { PaypalInformationRoot } from './PaypalInformation'
import { CreditCardInformationRoot } from './CreditCardInformation'

export interface PaymentAccountRoot {
  id: string
  createdAt: string
  type: PAYMENT_PROVIDERRoot
  user: UserRoot
  payments: PaymentRoot[]
  paypal: PaypalInformationRoot
  creditcard: CreditCardInformationRoot
}

export const PaymentAccount: IPaymentAccount.Resolver<Types> = {
  id: async root => root.id,
  createdAt: async root => root.createdAt,
  type: async root => root.type,
  user: async root => root.user,
  payments: async root => root.payments,
  paypal: async root => root.paypal,
  creditcard: async root => root.creditcard,
}

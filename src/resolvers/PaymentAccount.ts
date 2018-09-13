import { IPaymentAccount } from '../generated/resolvers'
import { Types } from '../types/types'
import { UserRoot } from './User'
import { PaymentRoot } from './Payment'
import { PaypalInformationRoot } from './PaypalInformation'
import { CreditCardInformationRoot } from './CreditCardInformation'

export type PAYMENT_PROVIDER = 'PAYPAL' | 'CREDIT_CARD'

export interface PaymentAccountRoot {
  id: string
  createdAt: string
  type?: PAYMENT_PROVIDER
  user: UserRoot
  payments: PaymentRoot[]
  paypal?: PaypalInformationRoot
  creditcard?: CreditCardInformationRoot
}

export const PaymentAccount: IPaymentAccount.Resolver<Types> = {
  id: root => root.id,
  createdAt: root => root.createdAt,
  type: root => root.type,
  user: root => root.user,
  payments: root => root.payments,
  paypal: root => root.paypal,
  creditcard: root => root.creditcard,
}

import { IPaypalInformation } from './generated/interfaces.ts'
import { Types } from './types'

import { PaymentAccountRoot } from './PaymentAccount'

export interface PaypalInformationRoot {
  createdAt: string
  email: string
  id: string
  paymentAccount: PaymentAccountRoot
}

export const PaypalInformation: IPaypalInformation.Resolver<Types> = {
  createdAt: async root => root.createdAt,
  email: async root => root.email,
  id: async root => root.id,
  paymentAccount: async root => root.paymentAccount,
}

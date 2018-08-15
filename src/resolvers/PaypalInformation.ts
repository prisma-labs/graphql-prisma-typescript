import { IPaypalInformation } from './generated/interfaces'
import { Types } from './types'

import { PaymentAccountRoot } from './PaymentAccount'

export interface PaypalInformationRoot {
  createdAt: string
  email: string
  id: string
  paymentAccount: PaymentAccountRoot
}

export const PaypalInformation: IPaypalInformation.Resolver<Types> = {
  createdAt: root => root.createdAt,
  email: root => root.email,
  id: root => root.id,
  paymentAccount: root => root.paymentAccount,
}

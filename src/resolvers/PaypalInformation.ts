import { IPaypalInformation } from '../generated/resolvers'
import { Types } from './types'

export interface PaypalInformationRoot {
  createdAt: string
  email: string
  id: string
}

export const PaypalInformation: IPaypalInformation.Resolver<Types> = {
  createdAt: root => root.createdAt,
  email: root => root.email,
  id: root => root.id,
  paymentAccount: (root, args, ctx) =>
    ctx.db.query.paypalInformation({ where: { id: root.id } }).paymentAccount(),
}

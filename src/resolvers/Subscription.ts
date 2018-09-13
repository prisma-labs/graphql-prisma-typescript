import { ISubscription } from '../generated/resolvers'
import { Types } from '../types/types'

export interface SubscriptionRoot {}

export const Subscription: ISubscription.Resolver<Types> = {
  city: root => null,
}

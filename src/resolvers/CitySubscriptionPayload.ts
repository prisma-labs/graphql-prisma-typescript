import { ICitySubscriptionPayload } from '../generated/resolvers'
import { Types } from '../types/types'
import { CityRoot } from './City'
import { CityPreviousValuesRoot } from './CityPreviousValues'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export interface CitySubscriptionPayloadRoot {
  mutation: MutationType
  node?: CityRoot
  updatedFields: string[]
  previousValues?: CityPreviousValuesRoot
}

export const CitySubscriptionPayload: ICitySubscriptionPayload.Resolver<
  Types
> = {
  mutation: root => root.mutation,
  node: root => root.node,
  updatedFields: root => root.updatedFields,
  previousValues: root => root.previousValues,
}

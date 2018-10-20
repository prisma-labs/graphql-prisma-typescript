import { CitySubscriptionPayloadResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { CityParent } from './City'
import { CityPreviousValuesParent } from './CityPreviousValues'

export type MutationType = 'CREATED' | 'UPDATED' | 'DELETED'

export interface CitySubscriptionPayloadParent {
  mutation: MutationType
  node: CityParent
  updatedFields: string[]
  previousValues: CityPreviousValuesParent
}

export const CitySubscriptionPayload: CitySubscriptionPayloadResolvers.Type<
  TypeMap
> = {
  mutation: parent => parent.mutation,
  node: parent => parent.node,
  updatedFields: parent => parent.updatedFields,
  previousValues: parent => parent.previousValues,
}

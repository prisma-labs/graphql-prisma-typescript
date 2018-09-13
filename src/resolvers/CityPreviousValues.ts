import { CityPreviousValuesResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface CityPreviousValuesParent {
  id: string
  name: string
}

export const CityPreviousValues: CityPreviousValuesResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name,
}

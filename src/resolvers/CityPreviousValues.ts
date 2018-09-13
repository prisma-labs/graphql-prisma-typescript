import { ICityPreviousValues } from '../generated/resolvers'
import { Types } from '../types/types'

export interface CityPreviousValuesRoot {
  id: string
  name: string
}

export const CityPreviousValues: ICityPreviousValues.Resolver<Types> = {
  id: root => root.id,
  name: root => root.name,
}

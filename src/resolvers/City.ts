import { ICity } from '../generated/resolvers'
import { Types } from '../types/types'

export interface CityRoot {
  id: string
  name: string
}

export const City: ICity.Resolver<Types> = {
  id: root => root.id,
  name: root => root.name,
}

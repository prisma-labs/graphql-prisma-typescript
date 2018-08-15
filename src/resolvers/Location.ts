import { ILocation } from '../generated/resolvers'
import { Types } from './types'

export interface LocationRoot {
  id: string
  lat: number
  lng: number
  address: string | null
  directions: string | null
}

export const Location: ILocation.Resolver<Types> = {
  id: root => root.id,
  lat: root => root.lat,
  lng: root => root.lng,
  address: root => root.address,
  directions: root => root.directions,
}

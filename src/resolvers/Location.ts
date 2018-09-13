import { ILocation } from '../generated/resolvers'
import { Types } from '../types/types'

export interface LocationRoot {
  id: string
  lat: number
  lng: number
  address?: string
  directions?: string
}

export const Location: ILocation.Resolver<Types> = {
  id: root => root.id,
  lat: root => root.lat,
  lng: root => root.lng,
  address: root => root.address,
  directions: root => root.directions,
}

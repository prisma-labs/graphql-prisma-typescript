import { ILocation } from './generated/interfaces.ts'
import { Types } from './types'

export interface LocationRoot {
  id: string
  lat: number
  lng: number
  address: string
  directions: string
}

export const Location: ILocation.Resolver<Types> = {
  id: async root => root.id,
  lat: async root => root.lat,
  lng: async root => root.lng,
  address: async root => root.address,
  directions: async root => root.directions,
}

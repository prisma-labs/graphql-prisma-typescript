import { IPlaceViews } from '../generated/resolvers'
import { Types } from './types'

export interface PlaceViewsRoot {
  id: string
  lastWeek: number
}

export const PlaceViews: IPlaceViews.Resolver<Types> = {
  id: root => root.id,
  lastWeek: root => root.lastWeek,
}

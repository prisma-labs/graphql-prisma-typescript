import { IReview } from './generated/interfaces'
import { Types } from './types'

export interface ReviewRoot {
  accuracy: number
  checkIn: number
  cleanliness: number
  communication: number
  createdAt: string
  id: string
  location: number
  stars: number
  text: string
  value: number
}

export const Review: IReview.Resolver<Types> = {
  accuracy: root => root.accuracy,
  checkIn: root => root.checkIn,
  cleanliness: root => root.cleanliness,
  communication: root => root.communication,
  createdAt: root => root.createdAt,
  id: root => root.id,
  location: root => root.location,
  stars: root => root.stars,
  text: root => root.text,
  value: root => root.value,
}

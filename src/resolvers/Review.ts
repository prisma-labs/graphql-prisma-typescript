import { IReview } from './generated/interfaces.ts'
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
  accuracy: async root => root.accuracy,
  checkIn: async root => root.checkIn,
  cleanliness: async root => root.cleanliness,
  communication: async root => root.communication,
  createdAt: async root => root.createdAt,
  id: async root => root.id,
  location: async root => root.location,
  stars: async root => root.stars,
  text: async root => root.text,
  value: async root => root.value,
}

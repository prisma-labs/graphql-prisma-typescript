import { IQuery } from '../generated/resolvers'
import { Types } from './types'

export interface QueryRoot {}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: root => {
    throw new Error('Resolver not implemented')
  },
  topHomes: root => {
    throw new Error('Resolver not implemented')
  },
  homesInPriceRange: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  topReservations: root => {
    throw new Error('Resolver not implemented')
  },
  featuredDestinations: root => {
    throw new Error('Resolver not implemented')
  },
  experiencesByCity: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  viewer: () => ({
    me: null,
    bookings: null,
  }),
  myLocation: root => null,
}

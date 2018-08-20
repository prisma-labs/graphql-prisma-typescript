import { IMutation } from '../generated/resolvers'
import { Types } from './types'

export interface MutationRoot {}

export const Mutation: IMutation.Resolver<Types> = {
  signup: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  login: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  addPaymentMethod: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  book: (root, args) => {
    throw new Error('Resolver not implemented')
  },
}

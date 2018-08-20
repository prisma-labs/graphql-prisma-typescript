import { IMutation } from '../../generated/resolvers'
import { signup, login } from './auth'
import { book } from './book'
import { addPaymentMethod } from './addPaymentMethod'
import { Types } from '../types'

export const Mutation: IMutation.Resolver<Types> = {
  signup,
  login,
  book,
  addPaymentMethod,
}

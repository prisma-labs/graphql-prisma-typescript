import { IMutation } from '../../generated/schema'
import { signup, login } from './auth'
import { book } from './book'
import { addPaymentMethod } from './addPaymentMethod'
import { Context } from '../../utils'
import { AuthPayloadRoot } from '../AuthPayload'
import { MutationResultRoot } from '../MutationResult'

export const Mutation: IMutation.Resolver<
  Context,
  {},
  AuthPayloadRoot,
  MutationResultRoot
> = {
  signup,
  login,
  book,
  addPaymentMethod,
}

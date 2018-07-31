import { IMutation } from '../../generated/schema/Mutation'
import { auth } from './auth'
import { book } from './book'
import { addPaymentMethod } from './addPaymentMethod'
import { Context } from '../../utils'
import { AuthPayloadRoot } from '../AuthPayload'
import { MutationResultRoot } from '../MutationResult'

export const Mutation: IMutation<
  Context,
  {},
  AuthPayloadRoot,
  MutationResultRoot
> = {
  ...auth,
  book,
  addPaymentMethod,
}

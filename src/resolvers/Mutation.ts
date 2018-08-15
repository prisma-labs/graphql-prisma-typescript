import { IMutation } from './generated/interfaces'
import { Types } from './types'

import { AuthPayloadRoot } from './AuthPayload'
import { MutationResultRoot } from './MutationResult'

export interface MutationRoot {
  signup: AuthPayloadRoot
  login: AuthPayloadRoot
  addPaymentMethod: MutationResultRoot
  book: MutationResultRoot
}

export const Mutation: IMutation.Resolver<Types> = {
  signup: (root, args) => root.signup,
  login: (root, args) => root.login,
  addPaymentMethod: (root, args) => root.addPaymentMethod,
  book: (root, args) => root.book,
}

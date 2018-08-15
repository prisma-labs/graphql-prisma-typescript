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
  signup: async (root, args) => root.signup,
  login: async (root, args) => root.login,
  addPaymentMethod: async (root, args) => root.addPaymentMethod,
  book: async (root, args) => root.book,
}

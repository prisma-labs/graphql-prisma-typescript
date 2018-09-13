import { IMutationResult } from '../generated/resolvers'
import { Types } from '../types/types'

export interface MutationResultRoot {
  success: boolean
}

export const MutationResult: IMutationResult.Resolver<Types> = {
  success: root => root.success,
}

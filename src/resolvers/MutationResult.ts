import { IMutationResult } from './generated/interfaces.ts'
import { Types } from './types'

export interface MutationResultRoot {
  success: boolean
}

export const MutationResult: IMutationResult.Resolver<Types> = {
  success: async root => root.success,
}

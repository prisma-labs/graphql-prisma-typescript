import { IMutationResult } from './generated/interfaces'
import { Types } from './types'

export interface MutationResultRoot {
  success: boolean
}

export const MutationResult: IMutationResult.Resolver<Types> = {
  success: root => root.success,
}

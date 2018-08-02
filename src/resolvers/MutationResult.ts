import { IMutationResult } from '../generated/schema'
import { Types } from './types'

export interface MutationResultRoot {
  success: boolean
}

export const MutationResult: IMutationResult.Resolver<Types> = {
  success: root => root.success,
}

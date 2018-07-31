import { IMutationResult } from '../generated/schema/MutationResult'

export interface MutationResultRoot {
  success: boolean
}

export const MutationResult: IMutationResult<{}, MutationResultRoot> = {
  success: (root: MutationResultRoot) => root.success,
}

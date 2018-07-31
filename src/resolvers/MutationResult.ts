import { IMutationResult } from '../generated/schema'

export interface MutationResultRoot {
  success: boolean
}

export const MutationResult: IMutationResult.Resolver<
  {},
  MutationResultRoot
> = {
  success: root => root.success,
}

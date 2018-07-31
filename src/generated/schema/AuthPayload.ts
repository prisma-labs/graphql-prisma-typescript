import { GraphQLResolveInfo } from 'graphql'

export interface IMutationResult<Ctx, MutationResultRoot> {
  success: (
    root: MutationResultRoot,
    args: {},
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>
}
import { GraphQLResolveInfo } from 'graphql'

export namespace IMutationResult {
  export interface Resolver<Ctx, MutationResultRoot> {
    success: (
      root: MutationResultRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

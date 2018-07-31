import { GraphQLResolveInfo } from 'graphql'

export namespace IPicture {
  export interface Resolver<Ctx, PictureRoot> {
    url: (
      root: PictureRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

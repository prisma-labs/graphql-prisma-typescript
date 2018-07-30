import { GraphQLResolveInfo } from 'graphql'

export interface IPicture<Ctx, PictureRoot> {
  url: (
    root: PictureRoot,
    args: {},
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>
}
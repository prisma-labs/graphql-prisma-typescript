import { GraphQLResolveInfo } from 'graphql'

export namespace IHome {
  export interface PicturesArgs {
    first: number
  }

  export interface Resolver<Ctx, HomeRoot, PictureRoot> {
    id: (
      root: HomeRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      root: HomeRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    description: (
      root: HomeRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    numRatings: (
      root: HomeRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    avgRating: (
      root: HomeRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    pictures: (
      root: HomeRoot,
      args: PicturesArgs,
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => PictureRoot[] | Promise<PictureRoot[]>
    perNight: (
      root: HomeRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

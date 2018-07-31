import { GraphQLResolveInfo } from 'graphql'

export namespace IViewer {
  export interface Resolver<Ctx, ViewerRoot, UserRoot, BookingRoot> {
    me: (
      root: ViewerRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => UserRoot | Promise<UserRoot>

    bookings: (
      root: ViewerRoot,
      args: {},
      ctx: Ctx,
      info: GraphQLResolveInfo,
    ) => BookingRoot[] | Promise<BookingRoot[]>
  }
}

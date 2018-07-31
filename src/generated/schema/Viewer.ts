import { GraphQLResolveInfo } from 'graphql'

export interface IViewer<Ctx, ViewerRoot, UserRoot, BookingRoot> {
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

import { getUserId, Context } from '../utils'

export const Viewer = {
  bookings(_, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.bookings({ where: { bookee: { id } } }, info)
  },

  me(_, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

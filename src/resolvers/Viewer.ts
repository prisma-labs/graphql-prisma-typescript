import { getUserId, Context } from '../utils'
import { IViewer } from '../generated/schema/Viewer'
import { UserRoot } from './User'
import { BookingRoot } from './Booking'

export interface ViewerRoot {
  token: string
  user: UserRoot
}

export const Viewer: IViewer<Context, ViewerRoot, UserRoot, BookingRoot> = {
  bookings(root: ViewerRoot, args: {}, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.db.query.bookings({ where: { bookee: { id } } })
  },

  me(root: ViewerRoot, args: {}, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } })
  },
}

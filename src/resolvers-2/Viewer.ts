import { IViewer } from '../generated/resolvers'
import { Types } from './types'
import { UserRoot } from './User'
import { BookingRoot } from './Booking'
import { getUserId } from '../utils'

export interface ViewerRoot {
  me: UserRoot
  bookings: BookingRoot[]
}

export const Viewer: IViewer.Resolver<Types> = {
  bookings: (_, _args, ctx) => {
    const id = getUserId(ctx)
    return ctx.db.bookings({ where: { bookee: { id } } })
  },

  me: (_, _args, ctx) => {
    const id = getUserId(ctx)
    return ctx.db.user({ id })
  },
}

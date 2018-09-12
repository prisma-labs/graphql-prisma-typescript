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
  bookings: async (_, _args, ctx) => {
    const id = getUserId(ctx)
    const bookings = await ctx.db.bookings({ where: { bookee: { id } } }) || []
    return bookings.map(booking => {
      return {
        ...booking,
        bookee: null,
        place: null,
        payment: null,
      }
    })
  },

  me: (_, _args, ctx) => {
    const id = getUserId(ctx)
    return ctx.db.user({ id })
  },
}

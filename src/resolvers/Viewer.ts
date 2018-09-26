import { ViewerResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { UserParent } from './User'
import { BookingParent } from './Booking'

export interface ViewerParent {
  me: UserParent
  bookings: BookingParent[]
}

export const Viewer: ViewerResolvers.Type<TypeMap> = {
  me: (_parent, _args, ctx) => {
    const id = ctx.getUserId()

    return ctx.db.user({ id })
  },
  bookings: async (_parent, _args, ctx) => {
    const id = ctx.getUserId()
    const bookings =
      (await ctx.db.bookings({ where: { bookee: { id } } })) || []

    return bookings.map(booking => {
      return {
        ...booking,
        bookee: null,
        place: null,
        payment: null,
      }
    })
  },
}

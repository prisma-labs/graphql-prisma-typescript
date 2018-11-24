import { ViewerResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'
import { getUserId } from '../utils'

export interface ViewerParent {}

export const Viewer: ViewerResolvers.Type<TypeMap> = {
  me: (_parent, _args, ctx) => {
    const id = getUserId(ctx)

    return ctx.db.user({ id })
  },
  bookings: async (_parent, _args, ctx) => {
    const id = getUserId(ctx)
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

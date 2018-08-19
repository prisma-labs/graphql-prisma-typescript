import { IViewer } from '../generated/resolvers'
import { Types } from './types'
import { getUserId } from '../utils';

export interface ViewerRoot {}

export const Viewer: IViewer.Resolver<Types> = {
  bookings: (root, args, ctx) => {
    const id = getUserId(ctx)
    return ctx.db.query.bookings({ where: { bookee: { id } } })
  },

  me: (root, args, ctx) => {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } })
  },
}

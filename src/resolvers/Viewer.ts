import { getUserId } from '../utils'
import { IViewer } from '../generated/schema'
import { UserRoot } from './User'
import { Types } from './types'

export interface ViewerRoot {
  token: string
  user: UserRoot
}

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

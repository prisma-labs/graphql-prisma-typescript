import { getUserId } from '../utils'

export const Viewer = {
  bookings(_, args, context, info) {
    const id = getUserId(context)
    return context.remote.delegateQuery('allBookings', {filter: {bookee: {id}}}, {}, info)
  },
  me(_, args, context, info) {
    const id = getUserId(context)
    return context.remote.delegateQuery('User', {id}, {}, info)
  }
}
import { IViewer } from './generated/interfaces'
import { Types } from './types'

import { UserRoot } from './User'
import { BookingRoot } from './Booking'

export interface ViewerRoot {
  me: UserRoot
  bookings: BookingRoot[]
}

export const Viewer: IViewer.Resolver<Types> = {
  me: async root => root.me,
  bookings: async root => root.bookings,
}

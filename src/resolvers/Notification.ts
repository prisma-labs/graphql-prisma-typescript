import { INotification } from './generated/interfaces.ts'
import { Types } from './types'

export type NOTIFICATION_TYPERoot =
  | 'OFFER'
  | 'INSTANT_BOOK'
  | 'RESPONSIVENESS'
  | 'NEW_AMENITIES'
  | 'HOUSE_RULES'

import { UserRoot } from './User'

export interface NotificationRoot {
  createdAt: string
  id: string
  link: string
  readDate: string
  type: NOTIFICATION_TYPERoot
  user: UserRoot
}

export const Notification: INotification.Resolver<Types> = {
  createdAt: async root => root.createdAt,
  id: async root => root.id,
  link: async root => root.link,
  readDate: async root => root.readDate,
  type: async root => root.type,
  user: async root => root.user,
}

import { INotification } from './src/generated/resolvers'
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
  type: NOTIFICATION_TYPERoot | null
  user: UserRoot
}

export const Notification: INotification.Resolver<Types> = {
  createdAt: root => root.createdAt,
  id: root => root.id,
  link: root => root.link,
  readDate: root => root.readDate,
  type: root => root.type,
  user: root => root.user,
}

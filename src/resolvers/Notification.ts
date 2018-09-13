import { INotification } from '../generated/resolvers'
import { Types } from '../types/types'
import { UserRoot } from './User'

export type NOTIFICATION_TYPE =
  | 'OFFER'
  | 'INSTANT_BOOK'
  | 'RESPONSIVENESS'
  | 'NEW_AMENITIES'
  | 'HOUSE_RULES'

export interface NotificationRoot {
  createdAt: string
  id: string
  link: string
  readDate: string
  type?: NOTIFICATION_TYPE
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

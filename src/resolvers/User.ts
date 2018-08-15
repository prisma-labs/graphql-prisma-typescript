import { IUser } from '../generated/resolvers'
import { Types } from './types'
import { BookingRoot } from './Booking'
import { ExperienceRoot } from './Experience'
import { LocationRoot } from './Location'
import { NotificationRoot } from './Notification'
import { PlaceRoot } from './Place'
import { PaymentAccountRoot } from './PaymentAccount'
import { PictureRoot } from './Picture'
import { MessageRoot } from './Message'

export interface UserRoot {
  bookings: BookingRoot[]
  createdAt: string
  email: string
  firstName: string
  hostingExperiences: ExperienceRoot[]
  id: string
  isSuperHost: boolean
  lastName: string
  location: LocationRoot
  notifications: NotificationRoot[]
  ownedPlaces: PlaceRoot[]
  paymentAccount: PaymentAccountRoot[]
  phone: string
  profilePicture: PictureRoot | null
  receivedMessages: MessageRoot[]
  responseRate: number | null
  responseTime: number | null
  sentMessages: MessageRoot[]
  updatedAt: string
  token: string
}

export const User: IUser.Resolver<Types> = {
  bookings: root => root.bookings,
  createdAt: root => root.createdAt,
  email: root => root.email,
  firstName: root => root.firstName,
  hostingExperiences: root => root.hostingExperiences,
  id: root => root.id,
  isSuperHost: root => root.isSuperHost,
  lastName: root => root.lastName,
  location: root => root.location,
  notifications: root => root.notifications,
  ownedPlaces: root => root.ownedPlaces,
  paymentAccount: root => root.paymentAccount,
  phone: root => root.phone,
  profilePicture: root => root.profilePicture,
  receivedMessages: root => root.receivedMessages,
  responseRate: root => root.responseRate,
  responseTime: root => root.responseTime,
  sentMessages: root => root.sentMessages,
  updatedAt: root => root.updatedAt,
  token: root => root.token,
}

import { IUser } from './generated/interfaces'
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
  profilePicture: PictureRoot
  receivedMessages: MessageRoot[]
  responseRate: number
  responseTime: number
  sentMessages: MessageRoot[]
  updatedAt: string
  token: string
}

export const User: IUser.Resolver<Types> = {
  bookings: async root => root.bookings,
  createdAt: async root => root.createdAt,
  email: async root => root.email,
  firstName: async root => root.firstName,
  hostingExperiences: async root => root.hostingExperiences,
  id: async root => root.id,
  isSuperHost: async root => root.isSuperHost,
  lastName: async root => root.lastName,
  location: async root => root.location,
  notifications: async root => root.notifications,
  ownedPlaces: async root => root.ownedPlaces,
  paymentAccount: async root => root.paymentAccount,
  phone: async root => root.phone,
  profilePicture: async root => root.profilePicture,
  receivedMessages: async root => root.receivedMessages,
  responseRate: async root => root.responseRate,
  responseTime: async root => root.responseTime,
  sentMessages: async root => root.sentMessages,
  updatedAt: async root => root.updatedAt,
  token: async root => root.token,
}

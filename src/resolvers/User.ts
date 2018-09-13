import { IUser } from '../generated/resolvers'
import { Types } from '../types/types'
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
  profilePicture?: PictureRoot
  receivedMessages: MessageRoot[]
  responseRate?: number
  responseTime?: number
  sentMessages: MessageRoot[]
  updatedAt: string
  token: string
}


export const User: IUser.Resolver<Types> = {
  bookings: (root, _args, ctx) => ctx.db.user({ id: root.id }).bookings(),
  createdAt: root => root.createdAt,
  email: root => root.email,
  firstName: root => root.firstName,
  hostingExperiences: (root, _args, ctx) => ctx.db.user({ id: root.id }).hostingExperiences(),
  id: root => root.id,
  isSuperHost: root => root.isSuperHost,
  lastName: root => root.lastName,
  location: (root, _args, ctx) => ctx.db.user({ id: root.id }).location(),
  notifications: (root, _args, ctx) => ctx.db.user({ id: root.id }).notifications(),
  ownedPlaces: (root, _args, ctx) => ctx.db.user({ id: root.id }).ownedPlaces(),
  paymentAccount: root => root.paymentAccount,
  phone: root => root.phone,
  profilePicture: (root, _args, ctx) => ctx.db.user({ id: root.id }).profilePicture(),
  receivedMessages: (root, _args, ctx) => ctx.db.user({ id: root.id }).receivedMessages(),
  responseRate: root => root.responseRate,
  responseTime: root => root.responseTime,
  sentMessages: (root, _args, ctx) => ctx.db.user({ id: root.id }).sentMessages(),
  updatedAt: root => root.updatedAt,
  token: root => root.token,
}

import { UserResolvers } from '../generated/resolvers'
import { TypeMap } from '../types/TypeMap'
import { BookingParent } from './Booking'
import { ExperienceParent } from './Experience'
import { LocationParent } from './Location'
import { NotificationParent } from './Notification'
import { PlaceParent } from './Place'
import { PaymentAccountParent } from './PaymentAccount'
import { PictureParent } from './Picture'
import { MessageParent } from './Message'

export interface UserParent {
  bookings: BookingParent[]
  createdAt: string
  email: string
  firstName: string
  hostingExperiences: ExperienceParent[]
  id: string
  isSuperHost: boolean
  lastName: string
  location?: LocationParent
  notifications: NotificationParent[]
  ownedPlaces: PlaceParent[]
  paymentAccount?: PaymentAccountParent[]
  phone: string
  profilePicture?: PictureParent
  receivedMessages: MessageParent[]
  responseRate?: number
  responseTime?: number
  sentMessages: MessageParent[]
  updatedAt: string
  token: string
}

export const User: UserResolvers.Type<TypeMap> = {
  bookings: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).bookings(),
  createdAt: parent => parent.createdAt,
  email: parent => parent.email,
  firstName: parent => parent.firstName,
  hostingExperiences: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).hostingExperiences(),
  id: parent => parent.id,
  isSuperHost: parent => parent.isSuperHost,
  lastName: parent => parent.lastName,
  location: (parent, _args, ctx) => ctx.db.user({ id: parent.id }).location(),
  notifications: (root, _args, ctx) =>
    ctx.db.user({ id: root.id }).notifications(),
  ownedPlaces: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).ownedPlaces(),
  paymentAccount: parent => parent.paymentAccount,
  phone: parent => parent.phone,
  profilePicture: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).profilePicture(),
  receivedMessages: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).receivedMessages(),
  responseRate: parent => parent.responseRate,
  responseTime: parent => parent.responseTime,
  sentMessages: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).sentMessages(),
  updatedAt: parent => parent.updatedAt,
  token: parent => parent.token,
}

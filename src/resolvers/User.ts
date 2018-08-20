import { IUser } from '../generated/resolvers'
import { Types } from './types'

export interface UserRoot {
  createdAt: string
  email: string
  firstName: string
  id: string
  isSuperHost: boolean
  lastName: string
  phone: string
  responseRate: number
  responseTime: number
  updatedAt: string
}

export const User: IUser.Resolver<Types> = {
  bookings: (root, args, ctx) => ctx.db.user({ id: root.id }).bookings(),
  createdAt: root => root.createdAt,
  email: root => root.email,
  firstName: root => root.firstName,
  hostingExperiences: (root, args, ctx) =>
    ctx.db.user({ id: root.id }).hostingExperiences(),
  id: root => root.id,
  isSuperHost: root => root.isSuperHost,
  lastName: root => root.lastName,
  location: (root, args, ctx) => ctx.db.user({ id: root.id }).location(),
  notifications: (root, args, ctx) =>
    ctx.db.user({ id: root.id }).notifications(),
  ownedPlaces: (root, args, ctx) => ctx.db.user({ id: root.id }).ownedPlaces(),
  paymentAccount: (root, args, ctx) =>
    ctx.db.user({ id: root.id }).paymentAccount(),
  phone: root => root.phone,
  profilePicture: (root, args, ctx) =>
    ctx.db.user({ id: root.id }).profilePicture(),
  receivedMessages: (root, args, ctx) =>
    ctx.db.user({ id: root.id }).receivedMessages(),
  responseRate: root => root.responseRate,
  responseTime: root => root.responseTime,
  sentMessages: (root, args, ctx) =>
    ctx.db.user({ id: root.id }).sentMessages(),
  updatedAt: root => root.updatedAt,
  // TODO implement token
  token: root => '',
}

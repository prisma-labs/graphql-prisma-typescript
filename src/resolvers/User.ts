import { UserResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export interface UserParent {
  createdAt: string
  email: string
  firstName: string
  id: string
  isSuperHost: boolean
  lastName: string
  phone: string
  responseRate?: number
  responseTime?: number
  updatedAt: string
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
  paymentAccount: (root, _args, ctx) =>
  ctx.db.user({ id: root.id }).paymentAccount(),
  phone: parent => parent.phone,
  profilePicture: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).profilePicture(),
  receivedMessages: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).receivedMessages(),
  responseRate: (parent, _args, ctx) =>
  ctx.db.user({ id: parent.id }).responseRate(),
  responseTime: (parent, _args, ctx) =>
  ctx.db.user({ id: parent.id }).responseTime(),
  sentMessages: (parent, _args, ctx) =>
    ctx.db.user({ id: parent.id }).sentMessages(),
  updatedAt: parent => parent.updatedAt,
}

import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { IMutation } from '../generated/resolvers'
import { getUserId } from '../utils'
import { Types } from './types'
import { Context } from './Context'

export interface MutationRoot {}

export const Mutation: IMutation.Resolver<Types> = {
  signup: async (_, args, ctx: Context, _info) => {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.createUser({
      ...args,
      password,
      responseRate: 0,
      responseTime: 0,
    })

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user: {
        ...user,
        token,
        sentMessages: null,
        receivedMessages: null,
        paymentAccount: null,
        ownedPlaces: null,
        notifications: null,
        bookings: null,
        hostingExperiences: null,
        location: null,
      },
    }
  },

  login: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  addPaymentMethod: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  book: (root, args) => {
    throw new Error('Resolver not implemented')
  },
  addLocationToUser: async (root, { location }, ctx) => {
    const id = getUserId(ctx)

    const createdLocation = await ctx.db.createLocation({
      ...location,
      user: { connect: { id } },
    })

    return {
      success: !!createdLocation,
    }
  },
}

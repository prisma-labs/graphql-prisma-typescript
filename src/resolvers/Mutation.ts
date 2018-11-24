import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { MutationResolvers } from '../generated/resolvers'
import { getUserId } from '../utils'
import { TypeMap } from './types/TypeMap'

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  signup: async (_, args, ctx, _info) => {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.createUser({
      ...args,
      password,
      responseRate: 0,
      responseTime: 0,
    })

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET as jwt.Secret)

    return {
      id: user.id,
      token,
    }
  },
  login: async (_parent, { email, password }, ctx) => {
    const user = await ctx.db.user({ email })
    const valid = await bcrypt.compare(password, user ? user.password : '')

    if (!valid || !user) {
      throw new Error('Invalid Credentials')
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET as jwt.Secret)

    return {
      id: user.id,
      token,
    }
  },
  addPaymentMethod: (parent, args) => {
    throw new Error('Resolver not implemented')
  },
  book: async (_parent, args, ctx) => {
    // function daysBetween(date1: Date, date2: Date): number {
    //   // The number of milliseconds in one day
    //   const ONE_DAY = 1000 * 60 * 60 * 24
    //
    //   // Convert both dates to milliseconds
    //   const date1Ms = date1.getTime()
    //   const date2Ms = date2.getTime()
    //
    //   // Calculate the difference in milliseconds
    //   const difference_ms = Math.abs(date1Ms - date2Ms)
    //
    //   return Math.round(difference_ms / ONE_DAY)
    // }

    const userId = getUserId(ctx)

    // TODO: IMPLEMENT
    // const paymentAccount = await getPaymentAccount(userId, ctx)
    // if (!paymentAccount) {
    //   throw new Error(`You don't have a payment method yet`)
    // }

    const alreadyBooked = await ctx.db.bookings({
      where: {
        startDate_gte: args.checkIn,
        startDate_lte: args.checkOut,
        place: { id: args.placeId },
      },
    })

    if (alreadyBooked && alreadyBooked.length > 0) {
      throw new Error(`The requested time is not free.`)
    }

    // const days = daysBetween(new Date(args.checkIn), new Date(args.checkOut))

    const pricing = await ctx.db.place({ id: args.placeId }).pricing()

    if (!pricing) {
      throw new Error(`No such place/pricing found`)
    }

    // const placePrice = days * pricing.perNight
    // const totalPrice = placePrice * 1.2
    // const serviceFee = placePrice * 0.2

    // TODO implement real stripe
    // await payWithStripe()

    await ctx.db.createBooking({
      startDate: args.checkIn,
      endDate: args.checkOut,
      bookee: { connect: { id: userId } },
      place: { connect: { id: args.placeId } },
    })

    return { success: true }
  },
}

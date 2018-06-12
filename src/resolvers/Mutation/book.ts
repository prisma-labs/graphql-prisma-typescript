import { getUserId, Context } from '../../utils'
import gql from 'graphql-tag'

export async function book(parent, args, ctx: Context, info) {
  const userId = getUserId(ctx)

  const paymentAccount = await getPaymentAccount(userId, ctx)
  if (!paymentAccount) {
    throw new Error(`You don't have a payment method yet`)
  }

  const alreadyBooked = await ctx.db.exists.Booking({
    place: { id: args.placeId },
    startDate_gte: args.checkIn,
    startDate_lte: args.checkOut,
  })
  if (alreadyBooked) {
    throw new Error(`The requested time is not free.`)
  }

  const days = daysBetween(new Date(args.checkIn), new Date(args.checkOut))
  const place = await ctx.db.query.place(
    { where: { id: args.placeId } },
    gql`{ pricing { perNight } }`,
  )

  if (!place) {
    throw new Error(`No such place found`)
  }

  const placePrice = days * place.pricing.perNight
  const totalPrice = placePrice * 1.2
  const serviceFee = placePrice * 0.2

  // TODO implement real stripe
  await payWithStripe()

  await ctx.db.mutation.createBooking({
    data: {
      startDate: args.checkIn,
      endDate: args.checkOut,
      bookee: { connect: { id: userId } },
      place: { connect: { id: args.placeId } },
      payment: {
        create: {
          placePrice,
          totalPrice,
          serviceFee,
          paymentMethod: { connect: { id: paymentAccount.id } },
        },
      },
    },
  })

  return { success: true }
}

function payWithStripe() {
  return Promise.resolve()
}

async function getPaymentAccount(userId: string, ctx: Context) {
  const paymentAccounts = await ctx.db.query.paymentAccounts(
    { where: { user: { id: userId } } },
    gql`{
      id
      creditcard {
        id
        cardNumber
        country
        expiresOnMonth
        expiresOnYear
        firstName
        lastName
        securityCode
        postalCode
      }
    }`,
  )

  return paymentAccounts[0]
}

function daysBetween(date1: Date, date2: Date): number {
  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24

  // Convert both dates to milliseconds
  const date1Ms = date1.getTime()
  const date2Ms = date2.getTime()

  // Calculate the difference in milliseconds
  const difference_ms = Math.abs(date1Ms - date2Ms)

  return Math.round(difference_ms / ONE_DAY)
}

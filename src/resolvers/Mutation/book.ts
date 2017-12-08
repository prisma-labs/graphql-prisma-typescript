import { getUserId, Context } from '../../utils'

export async function book(parent, args, ctx: Context, info) {
  const userId = getUserId(ctx)

  const paymentAccount = await getPaymentAccount(userId, ctx)
  if (!paymentAccount) {
    throw new Error(`You don't have a payment method yet`)
  }

  if (await alreadyBooked(args.placeId, args.checkIn, args.checkOut, ctx)) {
    throw new Error(`The requested time is not free.`)
  }

  const days = daysBetween(new Date(args.checkIn), new Date(args.checkOut))
  const { Place } = await getPlace(args.placeId, ctx)

  const placePrice = days * Place.pricing.perNight
  const totalPrice = placePrice * 1.2
  const serviceFee = placePrice * 0.2

  const payment = {
    placePrice,
    totalPrice,
    serviceFee,
    paymentMethodId: paymentAccount.id,
  }

  // TODO implement real stripe
  await payWithStripe(payment)

  await createBooking(
    args.checkIn,
    args.checkOut,
    userId,
    args.placeId,
    payment,
    ctx,
  )

  return { success: true }
}

function payWithStripe(payment: any) {
  return Promise.resolve()
}

function createBooking(
  startDate: string,
  endDate: string,
  bookeeId: string,
  placeId: string,
  payment: any,
  ctx: Context,
) {
  return ctx.db.request(
    `mutation createBooking(
    $startDate: DateTime!
    $endDate: DateTime!
    $bookeeId: ID!
    $placeId: ID!
    $payment: BookingpaymentPayment
  ) {
    createBooking(
      startDate: $startDate
      endDate: $endDate
      bookeeId: $bookeeId
      placeId: $placeId
      payment: $payment
    ) {
      id
    }
  }`,
    { startDate, endDate, bookeeId, placeId, payment },
  )
}

function getPlace(id: string, ctx: Context) {
  return ctx.db.request(`{
    Place(id: "${id}") {
      id
      pricing {
        perNight
      }
    }
  }`)
}

async function getPaymentAccount(userId: string, ctx: Context) {
  const { User } = await ctx.db.request(`{
    User(id: "${userId}") {
      id
      paymentAccount {
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
      }
    }
  }`)

  return User.paymentAccount[0]
}

async function alreadyBooked(
  id: string,
  start: string,
  end: string,
  ctx: Context,
) {
  const Place = await ctx.db.query.Place(
    { id },
    `{
      bookings(filter: {
        startDate_gte: "${start}"
        startDate_lte: "${end}"
      }) {
        id
      }
    }`,
  )
  return Place.bookings.length > 0
}

function daysBetween(date1, date2) {
  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24

  // Convert both dates to milliseconds
  const date1Ms = date1.getTime()
  const date2Ms = date2.getTime()

  // Calculate the difference in milliseconds
  const difference_ms = Math.abs(date1Ms - date2Ms)

  return Math.round(difference_ms / ONE_DAY)
}

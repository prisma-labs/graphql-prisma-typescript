import { Context, getUserId } from '../utils'
import { rule } from 'graphql-shield'

export const isUserAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx: Context, info) => {
    console.log('is auth')

    const userId = getUserId(ctx)

    return userId !== undefined
  },
)

export const isUserSelf = rule({
  cache: 'strict',
  fragment: 'fragment UserID on User { id }',
})(async ({ id }, args, ctx: Context, info) => {
  console.log('is self')
  const userId = getUserId(ctx)
  return id === userId
})

export const isUserPaymentAccountOwner = rule({
  cache: 'strict',
  fragment: 'fragment PaymentAccountID on PaymentAccount { id }',
})(async ({ id }, args, ctx: Context, info) => {
  const userId = getUserId(ctx)
  console.log('is payment account owner')
  return ctx.db.exists.PaymentAccount({
    id,
    user: { id: userId },
  })
})

export const isUserPlaceOwner = rule({
  cache: 'strict',
  fragment: 'fragment PlaceID on Place { id }',
})(async ({ id }, args, ctx: Context, info) => {
  console.log('is place owner')
  const userId = getUserId(ctx)
  return ctx.db.exists.Place({
    id,
    host: { id: userId },
  })
})

export const isUserBookingOwner = rule({
  cache: 'strict',
  fragment: 'fragment BookingID on Booking { id }',
})(async ({ id }, args, ctx: Context, info) => {
  console.log('is booking owner')
  const userId = getUserId(ctx)
  return ctx.db.exists.Booking({
    id,
    bookee: { id: userId },
  })
})

import { shield } from 'graphql-shield'

import {
  isUserAuthenticated,
  // isUserSelf,
  // isUserPaymentAccountOwner,
  isUserPlaceOwner,
  // isUserBookingOwner,
} from './rules'

export const permissions = shield({
  Mutation: {
    addPaymentMethod: isUserAuthenticated,
    book: isUserAuthenticated,
  },
  // User: {
  //   paymentAccount: isUserSelf,
  //   token: isUserSelf,
  //   booking: isUserSelf,
  //   ownedPlaces: isUserSelf,
  //   receivedMessages: isUserSelf,
  //   sentMessages: isUserSelf,
  //   notifications: isUserSelf,
  // },
  // PaymentAccount: isUserPaymentAccountOwner,
  Place: {
    reviews: isUserAuthenticated,
    views: isUserPlaceOwner,
    bookings: isUserPlaceOwner,
  },
  // Booking: isUserBookingOwner,
})

import { IBooking } from '../generated/schema'
import { Context } from '../utils'

// TODO
export interface BookingRoot {}

export const Booking: IBooking.Resolver<Context, BookingRoot> = {}

import { IBooking } from '../generated/schema/Booking'
import { Context } from '../utils'

// TODO
export interface BookingRoot {}

export const Booking: IBooking<Context, BookingRoot> = {}

import { IBooking } from '../generated/schema'
import { Types } from './types'

// TODO
export interface BookingRoot {}

export const Booking: IBooking.Resolver<Types> = {}

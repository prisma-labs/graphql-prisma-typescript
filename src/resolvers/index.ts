import { Types } from './types'
import { Query } from './Query'
import { Mutation } from './Mutation'
import { Home } from './Home'
import { ExperiencesByCity } from './ExperiencesByCity'
import { Viewer } from './Viewer'
import { MutationResult } from './MutationResult'
import { AuthPayload } from './AuthPayload'
import { City } from './City'
import { Experience } from './Experience'
import { User } from './User'
import { Picture } from './Picture'
import { Booking } from './Booking'
import { IResolvers } from '../generated/resolvers'
import { Amenities } from './Amenities'
import { CreditCardInformation } from './CreditCardInformation'
import { ExperienceCategory } from './ExperienceCategory'
import { GuestRequirements } from './GuestRequirements'
import { HouseRules } from './HouseRules'
import { Location } from './Location'
import { Message } from './Message'
import { Neighbourhood } from './Neighbourhood'
import { Notification } from './Notification'
import { Payment } from './Payment'
import { PaymentAccount } from './PaymentAccount'
import { PaypalInformation } from './PaypalInformation'
import { Place } from './Place'
import { PlaceViews } from './PlaceViews'
import { Policies } from './Policies'
import { Pricing } from './Pricing'
import { Reservation } from './Reservation'
import { Review } from './Review'

export const resolvers: IResolvers<Types> = {
  Amenities,
  AuthPayload,
  Booking,
  City,
  CreditCardInformation,
  Experience,
  ExperienceCategory,
  ExperiencesByCity,
  GuestRequirements,
  Home,
  HouseRules,
  Location,
  Message,
  Mutation,
  MutationResult,
  Neighbourhood,
  Notification,
  Payment,
  PaymentAccount,
  PaypalInformation,
  Picture,
  Place,
  Query,
  PlaceViews,
  Policies,
  Pricing,
  Reservation,
  Review,
  User,
  Viewer,
}

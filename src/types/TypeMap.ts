import { ITypeMap } from '../generated/resolvers'

import { QueryParent } from '../resolvers/Query'
import { MutationParent } from '../resolvers/Mutation'
import { SubscriptionParent } from '../resolvers/Subscription'
import { ViewerParent } from '../resolvers/Viewer'
import { AuthPayloadParent } from '../resolvers/AuthPayload'
import { MutationResultParent } from '../resolvers/MutationResult'
import { ExperiencesByCityParent } from '../resolvers/ExperiencesByCity'
import { HomeParent } from '../resolvers/Home'
import { ReservationParent } from '../resolvers/Reservation'
import { ExperienceParent } from '../resolvers/Experience'
import { ReviewParent } from '../resolvers/Review'
import { NeighbourhoodParent } from '../resolvers/Neighbourhood'
import { LocationParent } from '../resolvers/Location'
import { PictureParent } from '../resolvers/Picture'
import { CityParent } from '../resolvers/City'
import { ExperienceCategoryParent } from '../resolvers/ExperienceCategory'
import { UserParent } from '../resolvers/User'
import { PaymentAccountParent } from '../resolvers/PaymentAccount'
import { PlaceParent } from '../resolvers/Place'
import { BookingParent } from '../resolvers/Booking'
import { NotificationParent } from '../resolvers/Notification'
import { PaymentParent } from '../resolvers/Payment'
import { PaypalInformationParent } from '../resolvers/PaypalInformation'
import { CreditCardInformationParent } from '../resolvers/CreditCardInformation'
import { MessageParent } from '../resolvers/Message'
import { PricingParent } from '../resolvers/Pricing'
import { PlaceViewsParent } from '../resolvers/PlaceViews'
import { GuestRequirementsParent } from '../resolvers/GuestRequirements'
import { PoliciesParent } from '../resolvers/Policies'
import { HouseRulesParent } from '../resolvers/HouseRules'
import { AmenitiesParent } from '../resolvers/Amenities'
import { CitySubscriptionPayloadParent } from '../resolvers/CitySubscriptionPayload'
import { CityPreviousValuesParent } from '../resolvers/CityPreviousValues'

import { Context } from './Context'

export interface TypeMap extends ITypeMap {
  Context: Context
  QueryParent: QueryParent
  MutationParent: MutationParent
  SubscriptionParent: SubscriptionParent
  ViewerParent: ViewerParent
  AuthPayloadParent: AuthPayloadParent
  MutationResultParent: MutationResultParent
  ExperiencesByCityParent: ExperiencesByCityParent
  HomeParent: HomeParent
  ReservationParent: ReservationParent
  ExperienceParent: ExperienceParent
  ReviewParent: ReviewParent
  NeighbourhoodParent: NeighbourhoodParent
  LocationParent: LocationParent
  PictureParent: PictureParent
  CityParent: CityParent
  ExperienceCategoryParent: ExperienceCategoryParent
  UserParent: UserParent
  PaymentAccountParent: PaymentAccountParent
  PlaceParent: PlaceParent
  BookingParent: BookingParent
  NotificationParent: NotificationParent
  PaymentParent: PaymentParent
  PaypalInformationParent: PaypalInformationParent
  CreditCardInformationParent: CreditCardInformationParent
  MessageParent: MessageParent
  PricingParent: PricingParent
  PlaceViewsParent: PlaceViewsParent
  GuestRequirementsParent: GuestRequirementsParent
  PoliciesParent: PoliciesParent
  HouseRulesParent: HouseRulesParent
  AmenitiesParent: AmenitiesParent
  CitySubscriptionPayloadParent: CitySubscriptionPayloadParent
  CityPreviousValuesParent: CityPreviousValuesParent
}

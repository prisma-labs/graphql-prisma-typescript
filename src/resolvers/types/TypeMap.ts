import { ITypeMap } from '../../generated/resolvers'

import { QueryParent } from '../Query'
import { MutationParent } from '../Mutation'
import { SubscriptionParent } from '../Subscription'
import { ViewerParent } from '../Viewer'
import { AuthPayloadParent } from '../AuthPayload'
import { MutationResultParent } from '../MutationResult'
import { ExperiencesByCityParent } from '../ExperiencesByCity'
import { ReservationParent } from '../Reservation'
import { ExperienceParent } from '../Experience'
import { ReviewParent } from '../Review'
import { NeighbourhoodParent } from '../Neighbourhood'
import { LocationParent } from '../Location'
import { PictureParent } from '../Picture'
import { CityParent } from '../City'
import { ExperienceCategoryParent } from '../ExperienceCategory'
import { UserParent } from '../User'
import { PaymentAccountParent } from '../PaymentAccount'
import { PlaceParent } from '../Place'
import { BookingParent } from '../Booking'
import { NotificationParent } from '../Notification'
import { PaymentParent } from '../Payment'
import { PaypalInformationParent } from '../PaypalInformation'
import { CreditCardInformationParent } from '../CreditCardInformation'
import { MessageParent } from '../Message'
import { PricingParent } from '../Pricing'
import { PlaceViewsParent } from '../PlaceViews'
import { GuestRequirementsParent } from '../GuestRequirements'
import { PoliciesParent } from '../Policies'
import { HouseRulesParent } from '../HouseRules'
import { AmenitiesParent } from '../Amenities'
import { CitySubscriptionPayloadParent } from '../CitySubscriptionPayload'
import { CityPreviousValuesParent } from '../CityPreviousValues'

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

import { ITypes } from '../generated/resolvers'

import { QueryRoot } from '../resolvers/Query'
import { MutationRoot } from '../resolvers/Mutation'
import { SubscriptionRoot } from '../resolvers/Subscription'
import { ViewerRoot } from '../resolvers/Viewer'
import { AuthPayloadRoot } from '../resolvers/AuthPayload'
import { MutationResultRoot } from '../resolvers/MutationResult'
import { ExperiencesByCityRoot } from '../resolvers/ExperiencesByCity'
import { HomeRoot } from '../resolvers/Home'
import { ReservationRoot } from '../resolvers/Reservation'
import { ExperienceRoot } from '../resolvers/Experience'
import { ReviewRoot } from '../resolvers/Review'
import { NeighbourhoodRoot } from '../resolvers/Neighbourhood'
import { LocationRoot } from '../resolvers/Location'
import { PictureRoot } from '../resolvers/Picture'
import { CityRoot } from '../resolvers/City'
import { ExperienceCategoryRoot } from '../resolvers/ExperienceCategory'
import { UserRoot } from '../resolvers/User'
import { PaymentAccountRoot } from '../resolvers/PaymentAccount'
import { PlaceRoot } from '../resolvers/Place'
import { BookingRoot } from '../resolvers/Booking'
import { NotificationRoot } from '../resolvers/Notification'
import { PaymentRoot } from '../resolvers/Payment'
import { PaypalInformationRoot } from '../resolvers/PaypalInformation'
import { CreditCardInformationRoot } from '../resolvers/CreditCardInformation'
import { MessageRoot } from '../resolvers/Message'
import { PricingRoot } from '../resolvers/Pricing'
import { PlaceViewsRoot } from '../resolvers/PlaceViews'
import { GuestRequirementsRoot } from '../resolvers/GuestRequirements'
import { PoliciesRoot } from '../resolvers/Policies'
import { HouseRulesRoot } from '../resolvers/HouseRules'
import { AmenitiesRoot } from '../resolvers/Amenities'
import { CitySubscriptionPayloadRoot } from '../resolvers/CitySubscriptionPayload'
import { CityPreviousValuesRoot } from '../resolvers/CityPreviousValues'

import { Context } from './Context'

export interface Types extends ITypes {
  Context: Context
  QueryRoot: QueryRoot
  MutationRoot: MutationRoot
  SubscriptionRoot: SubscriptionRoot
  ViewerRoot: ViewerRoot
  AuthPayloadRoot: AuthPayloadRoot
  MutationResultRoot: MutationResultRoot
  ExperiencesByCityRoot: ExperiencesByCityRoot
  HomeRoot: HomeRoot
  ReservationRoot: ReservationRoot
  ExperienceRoot: ExperienceRoot
  ReviewRoot: ReviewRoot
  NeighbourhoodRoot: NeighbourhoodRoot
  LocationRoot: LocationRoot
  PictureRoot: PictureRoot
  CityRoot: CityRoot
  ExperienceCategoryRoot: ExperienceCategoryRoot
  UserRoot: UserRoot
  PaymentAccountRoot: PaymentAccountRoot
  PlaceRoot: PlaceRoot
  BookingRoot: BookingRoot
  NotificationRoot: NotificationRoot
  PaymentRoot: PaymentRoot
  PaypalInformationRoot: PaypalInformationRoot
  CreditCardInformationRoot: CreditCardInformationRoot
  MessageRoot: MessageRoot
  PricingRoot: PricingRoot
  PlaceViewsRoot: PlaceViewsRoot
  GuestRequirementsRoot: GuestRequirementsRoot
  PoliciesRoot: PoliciesRoot
  HouseRulesRoot: HouseRulesRoot
  AmenitiesRoot: AmenitiesRoot
  CitySubscriptionPayloadRoot: CitySubscriptionPayloadRoot
  CityPreviousValuesRoot: CityPreviousValuesRoot
}

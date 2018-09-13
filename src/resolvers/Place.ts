import { IPlace } from '../generated/resolvers'
import { Types } from '../types/types'
import { ReviewRoot } from './Review'
import { AmenitiesRoot } from './Amenities'
import { UserRoot } from './User'
import { PricingRoot } from './Pricing'
import { LocationRoot } from './Location'
import { PlaceViewsRoot } from './PlaceViews'
import { GuestRequirementsRoot } from './GuestRequirements'
import { PoliciesRoot } from './Policies'
import { HouseRulesRoot } from './HouseRules'
import { BookingRoot } from './Booking'
import { PictureRoot } from './Picture'

export type PLACE_SIZES =
  | 'ENTIRE_HOUSE'
  | 'ENTIRE_APARTMENT'
  | 'ENTIRE_EARTH_HOUSE'
  | 'ENTIRE_CABIN'
  | 'ENTIRE_VILLA'
  | 'ENTIRE_PLACE'
  | 'ENTIRE_BOAT'
  | 'PRIVATE_ROOM'

export interface PlaceRoot {
  id: string
  name?: string
  size?: PLACE_SIZES
  shortDescription: string
  description: string
  slug: string
  maxGuests: number
  numBedrooms: number
  numBeds: number
  numBaths: number
  reviews: ReviewRoot[]
  amenities: AmenitiesRoot
  host: UserRoot
  pricing: PricingRoot
  location: LocationRoot
  views: PlaceViewsRoot
  guestRequirements?: GuestRequirementsRoot
  policies?: PoliciesRoot
  houseRules?: HouseRulesRoot
  bookings: BookingRoot[]
  pictures: PictureRoot[]
  popularity: number
}

export const Place: IPlace.Resolver<Types> = {
  id: root => root.id,
  name: root => root.name,
  size: root => root.size,
  shortDescription: root => root.shortDescription,
  description: root => root.description,
  slug: root => root.slug,
  maxGuests: root => root.maxGuests,
  numBedrooms: root => root.numBedrooms,
  numBeds: root => root.numBeds,
  numBaths: root => root.numBaths,
  reviews: root => root.reviews,
  amenities: root => root.amenities,
  host: root => root.host,
  pricing: root => root.pricing,
  location: root => root.location,
  views: root => root.views,
  guestRequirements: root => root.guestRequirements,
  policies: root => root.policies,
  houseRules: root => root.houseRules,
  bookings: root => root.bookings,
  pictures: root => root.pictures,
  popularity: root => root.popularity,
}

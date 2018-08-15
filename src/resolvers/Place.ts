import { IPlace } from './generated/interfaces.ts'
import { Types } from './types'

export type PLACE_SIZESRoot =
  | 'ENTIRE_HOUSE'
  | 'ENTIRE_APARTMENT'
  | 'ENTIRE_EARTH_HOUSE'
  | 'ENTIRE_CABIN'
  | 'ENTIRE_VILLA'
  | 'ENTIRE_PLACE'
  | 'ENTIRE_BOAT'
  | 'PRIVATE_ROOM'

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

export interface PlaceRoot {
  id: string
  name: string
  size: PLACE_SIZESRoot
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
  guestRequirements: GuestRequirementsRoot
  policies: PoliciesRoot
  houseRules: HouseRulesRoot
  bookings: BookingRoot[]
  pictures: PictureRoot[]
  popularity: number
}

export const Place: IPlace.Resolver<Types> = {
  id: async root => root.id,
  name: async root => root.name,
  size: async root => root.size,
  shortDescription: async root => root.shortDescription,
  description: async root => root.description,
  slug: async root => root.slug,
  maxGuests: async root => root.maxGuests,
  numBedrooms: async root => root.numBedrooms,
  numBeds: async root => root.numBeds,
  numBaths: async root => root.numBaths,
  reviews: async root => root.reviews,
  amenities: async root => root.amenities,
  host: async root => root.host,
  pricing: async root => root.pricing,
  location: async root => root.location,
  views: async root => root.views,
  guestRequirements: async root => root.guestRequirements,
  policies: async root => root.policies,
  houseRules: async root => root.houseRules,
  bookings: async root => root.bookings,
  pictures: async root => root.pictures,
  popularity: async root => root.popularity,
}

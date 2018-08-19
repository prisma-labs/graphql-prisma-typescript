import { IPlace } from '../generated/resolvers'
import { Types } from './types'
import { PoliciesRoot } from './Policies'
import { HouseRulesRoot } from './HouseRules'
import { BookingRoot } from './Booking'

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
  name: string
  size: PLACE_SIZES | null
  shortDescription: string
  description: string
  slug: string
  maxGuests: number
  numBedrooms: number
  numBeds: number
  numBaths: number
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
  reviews: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).reviews(),
  amenities: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).amenities(),
  host: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).host(),
  pricing: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).pricing(),
  location: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).location(),
  views: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).views(),
  guestRequirements: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).guestRequirements(),
  policies: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).policies(),
  houseRules: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).houseRules(),
  bookings: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).bookings(),
  pictures: (root, args, ctx) =>
    ctx.db.query.place({ where: { id: root.id } }).pictures(),
  popularity: root => root.popularity,
}

import { PlaceResolvers } from '../generated/resolvers'
import { TypeMap } from './types/TypeMap'

export type PLACE_SIZES =
  | 'ENTIRE_HOUSE'
  | 'ENTIRE_APARTMENT'
  | 'ENTIRE_EARTH_HOUSE'
  | 'ENTIRE_CABIN'
  | 'ENTIRE_VILLA'
  | 'ENTIRE_PLACE'
  | 'ENTIRE_BOAT'
  | 'PRIVATE_ROOM'

export interface PlaceParent {
  id: string
  name: string
  size?: PLACE_SIZES
  shortDescription: string
  description: string
  slug: string
  maxGuests: number
  numBedrooms: number
  numBeds: number
  numBaths: number
  popularity: number
}

export const Place: PlaceResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  name: parent => parent.name,
  size: parent => parent.size,
  shortDescription: parent => parent.shortDescription,
  description: parent => parent.description,
  slug: parent => parent.slug,
  maxGuests: parent => parent.maxGuests,
  numBedrooms: parent => parent.numBedrooms,
  numBeds: parent => parent.numBeds,
  numBaths: parent => parent.numBaths,
  reviews: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).reviews();
  },
  amenities: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).amenities();
  },
  numRatings: (parent, _args, ctx) =>
    ctx.db
      .reviewsConnection({ where: { place: { id: parent.id } } })
      .aggregate()
      .count(),
  avgRating: async (parent, _args, ctx) => {
    const reviews = await ctx.db.reviews({
      where: { place: { id: parent.id } },
    })
    if (reviews.length > 0) {
      return reviews.reduce((acc, { stars }) => acc + stars, 0) / reviews.length
    }
    return null
  },
  host: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).host();
  },
  pricing: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).pricing();
  },
  location: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).location();
  },
  views: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).views();
  },
  guestRequirements: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).guestRequirements();
  },
  policies: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).policies();
  },
  houseRules: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).houseRules();
  },
  bookings: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).bookings();
  },
  pictures: (parent, _args, ctx) => {
    return ctx.db.place({ id: parent.id }).pictures();
  },
  popularity: parent => parent.popularity,
}

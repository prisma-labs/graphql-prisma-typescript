import { IPlace } from "./generated/interfaces.ts";
import { Types } from "./types";

type PLACE_SIZESRoot =
  | "ENTIRE_HOUSE"
  | "ENTIRE_APARTMENT"
  | "ENTIRE_EARTH_HOUSE"
  | "ENTIRE_CABIN"
  | "ENTIRE_VILLA"
  | "ENTIRE_PLACE"
  | "ENTIRE_BOAT"
  | "PRIVATE_ROOM";

import { ReviewRoot } from "./Review";

import { AmenitiesRoot } from "./Amenities";

import { UserRoot } from "./User";

import { PricingRoot } from "./Pricing";

import { LocationRoot } from "./Location";

import { PlaceViewsRoot } from "./PlaceViews";

import { GuestRequirementsRoot } from "./GuestRequirements";

import { PoliciesRoot } from "./Policies";

import { HouseRulesRoot } from "./HouseRules";

import { BookingRoot } from "./Booking";

import { PictureRoot } from "./Picture";

export interface PlaceRoot {
  id: string;

  name: string;

  size: PLACE_SIZESRoot;

  shortDescription: string;

  description: string;

  slug: string;

  maxGuests: number;

  numBedrooms: number;

  numBeds: number;

  numBaths: number;

  reviews: ReviewRoot[];

  amenities: AmenitiesRoot;

  host: UserRoot;

  pricing: PricingRoot;

  location: LocationRoot;

  views: PlaceViewsRoot;

  guestRequirements: GuestRequirementsRoot;

  policies: PoliciesRoot;

  houseRules: HouseRulesRoot;

  bookings: BookingRoot[];

  pictures: PictureRoot[];

  popularity: number;
}

export const Place: IPlace.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  name: async (root, args, ctx, info) => {
    return null;
  },
  size: async (root, args, ctx, info) => {
    return null;
  },
  shortDescription: async (root, args, ctx, info) => {
    return null;
  },
  description: async (root, args, ctx, info) => {
    return null;
  },
  slug: async (root, args, ctx, info) => {
    return null;
  },
  maxGuests: async (root, args, ctx, info) => {
    return null;
  },
  numBedrooms: async (root, args, ctx, info) => {
    return null;
  },
  numBeds: async (root, args, ctx, info) => {
    return null;
  },
  numBaths: async (root, args, ctx, info) => {
    return null;
  },
  reviews: async (root, args, ctx, info) => {
    return null;
  },
  amenities: async (root, args, ctx, info) => {
    return null;
  },
  host: async (root, args, ctx, info) => {
    return null;
  },
  pricing: async (root, args, ctx, info) => {
    return null;
  },
  location: async (root, args, ctx, info) => {
    return null;
  },
  views: async (root, args, ctx, info) => {
    return null;
  },
  guestRequirements: async (root, args, ctx, info) => {
    return null;
  },
  policies: async (root, args, ctx, info) => {
    return null;
  },
  houseRules: async (root, args, ctx, info) => {
    return null;
  },
  bookings: async (root, args, ctx, info) => {
    return null;
  },
  pictures: async (root, args, ctx, info) => {
    return null;
  },
  popularity: async (root, args, ctx, info) => {
    return null;
  }
};

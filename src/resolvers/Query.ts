import { IQuery } from "./generated/interfaces.ts";
import { Types } from "./types";

import { ExperienceRoot } from "./Experience";

import { HomeRoot } from "./Home";

import { ReservationRoot } from "./Reservation";

import { NeighbourhoodRoot } from "./Neighbourhood";

import { ExperiencesByCityRoot } from "./ExperiencesByCity";

import { ViewerRoot } from "./Viewer";

import { LocationRoot } from "./Location";

export interface QueryRoot {
  topExperiences: ExperienceRoot[];

  topHomes: HomeRoot[];

  homesInPriceRange: HomeRoot[];

  topReservations: ReservationRoot[];

  featuredDestinations: NeighbourhoodRoot[];

  experiencesByCity: ExperiencesByCityRoot[];

  viewer: ViewerRoot;

  myLocation: LocationRoot;
}

export const Query: IQuery.Resolver<Types> = {
  topExperiences: async (root, args, ctx, info) => {
    return null;
  },
  topHomes: async (root, args, ctx, info) => {
    return null;
  },
  homesInPriceRange: async (root, args, ctx, info) => {
    return null;
  },
  topReservations: async (root, args, ctx, info) => {
    return null;
  },
  featuredDestinations: async (root, args, ctx, info) => {
    return null;
  },
  experiencesByCity: async (root, args, ctx, info) => {
    return null;
  },
  viewer: async (root, args, ctx, info) => {
    return null;
  },
  myLocation: async (root, args, ctx, info) => {
    return null;
  }
};

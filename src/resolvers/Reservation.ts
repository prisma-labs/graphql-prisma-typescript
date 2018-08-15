import { IReservation } from "./generated/interfaces.ts";
import { Types } from "./types";

import { PictureRoot } from "./Picture";

import { LocationRoot } from "./Location";

export interface ReservationRoot {
  id: string;

  title: string;

  avgPricePerPerson: number;

  pictures: PictureRoot[];

  location: LocationRoot;

  isCurated: boolean;

  slug: string;

  popularity: number;
}

export const Reservation: IReservation.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  title: async (root, args, ctx, info) => {
    return null;
  },
  avgPricePerPerson: async (root, args, ctx, info) => {
    return null;
  },
  pictures: async (root, args, ctx, info) => {
    return null;
  },
  location: async (root, args, ctx, info) => {
    return null;
  },
  isCurated: async (root, args, ctx, info) => {
    return null;
  },
  slug: async (root, args, ctx, info) => {
    return null;
  },
  popularity: async (root, args, ctx, info) => {
    return null;
  }
};

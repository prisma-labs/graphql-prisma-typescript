import { IBooking } from "./generated/interfaces.ts";
import { Types } from "./types";

import { UserRoot } from "./User";

import { PlaceRoot } from "./Place";

import { PaymentRoot } from "./Payment";

export interface BookingRoot {
  id: string;

  createdAt: string;

  bookee: UserRoot;

  place: PlaceRoot;

  startDate: string;

  endDate: string;

  payment: PaymentRoot;
}

export const Booking: IBooking.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  bookee: async (root, args, ctx, info) => {
    return null;
  },
  place: async (root, args, ctx, info) => {
    return null;
  },
  startDate: async (root, args, ctx, info) => {
    return null;
  },
  endDate: async (root, args, ctx, info) => {
    return null;
  },
  payment: async (root, args, ctx, info) => {
    return null;
  }
};

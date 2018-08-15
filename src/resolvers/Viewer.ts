import { IViewer } from "./generated/interfaces.ts";
import { Types } from "./types";

import { UserRoot } from "./User";

import { BookingRoot } from "./Booking";

export interface ViewerRoot {
  me: UserRoot;

  bookings: BookingRoot[];
}

export const Viewer: IViewer.Resolver<Types> = {
  me: async (root, args, ctx, info) => {
    return null;
  },
  bookings: async (root, args, ctx, info) => {
    return null;
  }
};

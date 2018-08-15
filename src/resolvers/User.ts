import { IUser } from "./generated/interfaces.ts";
import { Types } from "./types";

import { BookingRoot } from "./Booking";

import { ExperienceRoot } from "./Experience";

import { LocationRoot } from "./Location";

import { NotificationRoot } from "./Notification";

import { PlaceRoot } from "./Place";

import { PaymentAccountRoot } from "./PaymentAccount";

import { PictureRoot } from "./Picture";

import { MessageRoot } from "./Message";

export interface UserRoot {
  bookings: BookingRoot[];

  createdAt: string;

  email: string;

  firstName: string;

  hostingExperiences: ExperienceRoot[];

  id: string;

  isSuperHost: boolean;

  lastName: string;

  location: LocationRoot;

  notifications: NotificationRoot[];

  ownedPlaces: PlaceRoot[];

  paymentAccount: PaymentAccountRoot[];

  phone: string;

  profilePicture: PictureRoot;

  receivedMessages: MessageRoot[];

  responseRate: number;

  responseTime: number;

  sentMessages: MessageRoot[];

  updatedAt: string;

  token: string;
}

export const User: IUser.Resolver<Types> = {
  bookings: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  email: async (root, args, ctx, info) => {
    return null;
  },
  firstName: async (root, args, ctx, info) => {
    return null;
  },
  hostingExperiences: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  isSuperHost: async (root, args, ctx, info) => {
    return null;
  },
  lastName: async (root, args, ctx, info) => {
    return null;
  },
  location: async (root, args, ctx, info) => {
    return null;
  },
  notifications: async (root, args, ctx, info) => {
    return null;
  },
  ownedPlaces: async (root, args, ctx, info) => {
    return null;
  },
  paymentAccount: async (root, args, ctx, info) => {
    return null;
  },
  phone: async (root, args, ctx, info) => {
    return null;
  },
  profilePicture: async (root, args, ctx, info) => {
    return null;
  },
  receivedMessages: async (root, args, ctx, info) => {
    return null;
  },
  responseRate: async (root, args, ctx, info) => {
    return null;
  },
  responseTime: async (root, args, ctx, info) => {
    return null;
  },
  sentMessages: async (root, args, ctx, info) => {
    return null;
  },
  updatedAt: async (root, args, ctx, info) => {
    return null;
  },
  token: async (root, args, ctx, info) => {
    return null;
  }
};

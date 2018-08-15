import { INotification } from "./generated/interfaces.ts";
import { Types } from "./types";

type NOTIFICATION_TYPERoot =
  | "OFFER"
  | "INSTANT_BOOK"
  | "RESPONSIVENESS"
  | "NEW_AMENITIES"
  | "HOUSE_RULES";

import { UserRoot } from "./User";

export interface NotificationRoot {
  createdAt: string;

  id: string;

  link: string;

  readDate: string;

  type: NOTIFICATION_TYPERoot;

  user: UserRoot;
}

export const Notification: INotification.Resolver<Types> = {
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  link: async (root, args, ctx, info) => {
    return null;
  },
  readDate: async (root, args, ctx, info) => {
    return null;
  },
  type: async (root, args, ctx, info) => {
    return null;
  },
  user: async (root, args, ctx, info) => {
    return null;
  }
};

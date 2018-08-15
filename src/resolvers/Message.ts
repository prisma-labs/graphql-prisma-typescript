import { IMessage } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface MessageRoot {
  createdAt: string;

  deliveredAt: string;

  id: string;

  readAt: string;
}

export const Message: IMessage.Resolver<Types> = {
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  deliveredAt: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  readAt: async (root, args, ctx, info) => {
    return null;
  }
};

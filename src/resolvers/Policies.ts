import { IPolicies } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface PoliciesRoot {
  checkInEndTime: number;

  checkInStartTime: number;

  checkoutTime: number;

  createdAt: string;

  id: string;

  updatedAt: string;
}

export const Policies: IPolicies.Resolver<Types> = {
  checkInEndTime: async (root, args, ctx, info) => {
    return null;
  },
  checkInStartTime: async (root, args, ctx, info) => {
    return null;
  },
  checkoutTime: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  updatedAt: async (root, args, ctx, info) => {
    return null;
  }
};

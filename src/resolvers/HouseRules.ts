import { IHouseRules } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface HouseRulesRoot {
  additionalRules: string;

  createdAt: string;

  id: string;

  partiesAndEventsAllowed: boolean;

  petsAllowed: boolean;

  smokingAllowed: boolean;

  suitableForChildren: boolean;

  suitableForInfants: boolean;

  updatedAt: string;
}

export const HouseRules: IHouseRules.Resolver<Types> = {
  additionalRules: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  partiesAndEventsAllowed: async (root, args, ctx, info) => {
    return null;
  },
  petsAllowed: async (root, args, ctx, info) => {
    return null;
  },
  smokingAllowed: async (root, args, ctx, info) => {
    return null;
  },
  suitableForChildren: async (root, args, ctx, info) => {
    return null;
  },
  suitableForInfants: async (root, args, ctx, info) => {
    return null;
  },
  updatedAt: async (root, args, ctx, info) => {
    return null;
  }
};

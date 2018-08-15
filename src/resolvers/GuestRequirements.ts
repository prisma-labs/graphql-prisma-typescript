import { IGuestRequirements } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface GuestRequirementsRoot {
  govIssuedId: boolean;

  guestTripInformation: boolean;

  id: string;

  recommendationsFromOtherHosts: boolean;
}

export const GuestRequirements: IGuestRequirements.Resolver<Types> = {
  govIssuedId: async (root, args, ctx, info) => {
    return null;
  },
  guestTripInformation: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  recommendationsFromOtherHosts: async (root, args, ctx, info) => {
    return null;
  }
};

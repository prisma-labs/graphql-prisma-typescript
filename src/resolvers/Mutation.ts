import { IMutation } from "./generated/interfaces.ts";
import { Types } from "./types";

import { AuthPayloadRoot } from "./AuthPayload";

import { MutationResultRoot } from "./MutationResult";

export interface MutationRoot {
  signup: AuthPayloadRoot;

  login: AuthPayloadRoot;

  addPaymentMethod: MutationResultRoot;

  book: MutationResultRoot;
}

export const Mutation: IMutation.Resolver<Types> = {
  signup: async (root, args, ctx, info) => {
    return null;
  },
  login: async (root, args, ctx, info) => {
    return null;
  },
  addPaymentMethod: async (root, args, ctx, info) => {
    return null;
  },
  book: async (root, args, ctx, info) => {
    return null;
  }
};

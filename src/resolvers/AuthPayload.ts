import { IAuthPayload } from "./generated/interfaces.ts";
import { Types } from "./types";

import { UserRoot } from "./User";

export interface AuthPayloadRoot {
  token: string;

  user: UserRoot;
}

export const AuthPayload: IAuthPayload.Resolver<Types> = {
  token: async (root, args, ctx, info) => {
    return null;
  },
  user: async (root, args, ctx, info) => {
    return null;
  }
};

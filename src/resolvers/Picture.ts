import { IPicture } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface PictureRoot {
  id: string;

  url: string;
}

export const Picture: IPicture.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  url: async (root, args, ctx, info) => {
    return null;
  }
};

import { IHome } from "./generated/interfaces.ts";
import { Types } from "./types";

import { PictureRoot } from "./Picture";

export interface HomeRoot {
  id: string;

  name: string;

  description: string;

  numRatings: number;

  avgRating: number;

  pictures: PictureRoot[];

  perNight: number;
}

export const Home: IHome.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  name: async (root, args, ctx, info) => {
    return null;
  },
  description: async (root, args, ctx, info) => {
    return null;
  },
  numRatings: async (root, args, ctx, info) => {
    return null;
  },
  avgRating: async (root, args, ctx, info) => {
    return null;
  },
  pictures: async (root, args, ctx, info) => {
    return null;
  },
  perNight: async (root, args, ctx, info) => {
    return null;
  }
};

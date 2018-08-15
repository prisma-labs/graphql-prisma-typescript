import { INeighbourhood } from "./generated/interfaces.ts";
import { Types } from "./types";

import { PictureRoot } from "./Picture";

import { CityRoot } from "./City";

export interface NeighbourhoodRoot {
  id: string;

  name: string;

  slug: string;

  homePreview: PictureRoot;

  city: CityRoot;

  featured: boolean;

  popularity: number;
}

export const Neighbourhood: INeighbourhood.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  name: async (root, args, ctx, info) => {
    return null;
  },
  slug: async (root, args, ctx, info) => {
    return null;
  },
  homePreview: async (root, args, ctx, info) => {
    return null;
  },
  city: async (root, args, ctx, info) => {
    return null;
  },
  featured: async (root, args, ctx, info) => {
    return null;
  },
  popularity: async (root, args, ctx, info) => {
    return null;
  }
};

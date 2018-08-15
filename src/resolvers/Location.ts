import { ILocation } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface LocationRoot {
  id: string;

  lat: number;

  lng: number;

  address: string;

  directions: string;
}

export const Location: ILocation.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  lat: async (root, args, ctx, info) => {
    return null;
  },
  lng: async (root, args, ctx, info) => {
    return null;
  },
  address: async (root, args, ctx, info) => {
    return null;
  },
  directions: async (root, args, ctx, info) => {
    return null;
  }
};

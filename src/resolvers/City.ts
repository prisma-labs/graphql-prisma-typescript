import { ICity } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface CityRoot {
  id: string;

  name: string;
}

export const City: ICity.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  name: async (root, args, ctx, info) => {
    return null;
  }
};

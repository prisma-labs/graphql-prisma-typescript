import { IExperience } from "./generated/interfaces.ts";
import { Types } from "./types";

import { ExperienceCategoryRoot } from "./ExperienceCategory";

import { LocationRoot } from "./Location";

import { ReviewRoot } from "./Review";

import { PictureRoot } from "./Picture";

export interface ExperienceRoot {
  id: string;

  category: ExperienceCategoryRoot;

  title: string;

  location: LocationRoot;

  pricePerPerson: number;

  reviews: ReviewRoot[];

  preview: PictureRoot;

  popularity: number;
}

export const Experience: IExperience.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  category: async (root, args, ctx, info) => {
    return null;
  },
  title: async (root, args, ctx, info) => {
    return null;
  },
  location: async (root, args, ctx, info) => {
    return null;
  },
  pricePerPerson: async (root, args, ctx, info) => {
    return null;
  },
  reviews: async (root, args, ctx, info) => {
    return null;
  },
  preview: async (root, args, ctx, info) => {
    return null;
  },
  popularity: async (root, args, ctx, info) => {
    return null;
  }
};

import { IExperienceCategory } from "./generated/interfaces.ts";
import { Types } from "./types";

import { ExperienceRoot } from "./Experience";

export interface ExperienceCategoryRoot {
  id: string;

  mainColor: string;

  name: string;

  experience: ExperienceRoot;
}

export const ExperienceCategory: IExperienceCategory.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  mainColor: async (root, args, ctx, info) => {
    return null;
  },
  name: async (root, args, ctx, info) => {
    return null;
  },
  experience: async (root, args, ctx, info) => {
    return null;
  }
};

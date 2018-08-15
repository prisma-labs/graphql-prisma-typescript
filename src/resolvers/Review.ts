import { IReview } from "./generated/interfaces.ts";
import { Types } from "./types";

export interface ReviewRoot {
  accuracy: number;

  checkIn: number;

  cleanliness: number;

  communication: number;

  createdAt: string;

  id: string;

  location: number;

  stars: number;

  text: string;

  value: number;
}

export const Review: IReview.Resolver<Types> = {
  accuracy: async (root, args, ctx, info) => {
    return null;
  },
  checkIn: async (root, args, ctx, info) => {
    return null;
  },
  cleanliness: async (root, args, ctx, info) => {
    return null;
  },
  communication: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  location: async (root, args, ctx, info) => {
    return null;
  },
  stars: async (root, args, ctx, info) => {
    return null;
  },
  text: async (root, args, ctx, info) => {
    return null;
  },
  value: async (root, args, ctx, info) => {
    return null;
  }
};

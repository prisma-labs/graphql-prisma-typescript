import { IPricing } from "./generated/interfaces.ts";
import { Types } from "./types";

type CURRENCYRoot = "CAD" | "CHF" | "EUR" | "JPY" | "USD" | "ZAR";

export interface PricingRoot {
  averageMonthly: number;

  averageWeekly: number;

  basePrice: number;

  cleaningFee: number;

  currency: CURRENCYRoot;

  extraGuests: number;

  id: string;

  monthlyDiscount: number;

  perNight: number;

  securityDeposit: number;

  smartPricing: boolean;

  weekendPricing: number;

  weeklyDiscount: number;
}

export const Pricing: IPricing.Resolver<Types> = {
  averageMonthly: async (root, args, ctx, info) => {
    return null;
  },
  averageWeekly: async (root, args, ctx, info) => {
    return null;
  },
  basePrice: async (root, args, ctx, info) => {
    return null;
  },
  cleaningFee: async (root, args, ctx, info) => {
    return null;
  },
  currency: async (root, args, ctx, info) => {
    return null;
  },
  extraGuests: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  monthlyDiscount: async (root, args, ctx, info) => {
    return null;
  },
  perNight: async (root, args, ctx, info) => {
    return null;
  },
  securityDeposit: async (root, args, ctx, info) => {
    return null;
  },
  smartPricing: async (root, args, ctx, info) => {
    return null;
  },
  weekendPricing: async (root, args, ctx, info) => {
    return null;
  },
  weeklyDiscount: async (root, args, ctx, info) => {
    return null;
  }
};

import { IPayment } from "./generated/interfaces.ts";
import { Types } from "./types";

import { BookingRoot } from "./Booking";

import { PaymentAccountRoot } from "./PaymentAccount";

export interface PaymentRoot {
  booking: BookingRoot;

  createdAt: string;

  id: string;

  paymentMethod: PaymentAccountRoot;

  serviceFee: number;
}

export const Payment: IPayment.Resolver<Types> = {
  booking: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  paymentMethod: async (root, args, ctx, info) => {
    return null;
  },
  serviceFee: async (root, args, ctx, info) => {
    return null;
  }
};

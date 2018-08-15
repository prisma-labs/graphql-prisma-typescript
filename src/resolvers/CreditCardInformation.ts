import { ICreditCardInformation } from "./generated/interfaces.ts";
import { Types } from "./types";

import { PaymentAccountRoot } from "./PaymentAccount";

export interface CreditCardInformationRoot {
  cardNumber: string;

  country: string;

  createdAt: string;

  expiresOnMonth: number;

  expiresOnYear: number;

  firstName: string;

  id: string;

  lastName: string;

  paymentAccount: PaymentAccountRoot;

  postalCode: string;

  securityCode: string;
}

export const CreditCardInformation: ICreditCardInformation.Resolver<Types> = {
  cardNumber: async (root, args, ctx, info) => {
    return null;
  },
  country: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  expiresOnMonth: async (root, args, ctx, info) => {
    return null;
  },
  expiresOnYear: async (root, args, ctx, info) => {
    return null;
  },
  firstName: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  lastName: async (root, args, ctx, info) => {
    return null;
  },
  paymentAccount: async (root, args, ctx, info) => {
    return null;
  },
  postalCode: async (root, args, ctx, info) => {
    return null;
  },
  securityCode: async (root, args, ctx, info) => {
    return null;
  }
};

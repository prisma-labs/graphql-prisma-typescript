import { IPaymentAccount } from "./generated/interfaces.ts";
import { Types } from "./types";

type PAYMENT_PROVIDERRoot = "PAYPAL" | "CREDIT_CARD";

import { UserRoot } from "./User";

import { PaymentRoot } from "./Payment";

import { PaypalInformationRoot } from "./PaypalInformation";

import { CreditCardInformationRoot } from "./CreditCardInformation";

export interface PaymentAccountRoot {
  id: string;

  createdAt: string;

  type: PAYMENT_PROVIDERRoot;

  user: UserRoot;

  payments: PaymentRoot[];

  paypal: PaypalInformationRoot;

  creditcard: CreditCardInformationRoot;
}

export const PaymentAccount: IPaymentAccount.Resolver<Types> = {
  id: async (root, args, ctx, info) => {
    return null;
  },
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  type: async (root, args, ctx, info) => {
    return null;
  },
  user: async (root, args, ctx, info) => {
    return null;
  },
  payments: async (root, args, ctx, info) => {
    return null;
  },
  paypal: async (root, args, ctx, info) => {
    return null;
  },
  creditcard: async (root, args, ctx, info) => {
    return null;
  }
};

import { IPaypalInformation } from "./generated/interfaces.ts";
import { Types } from "./types";

import { PaymentAccountRoot } from "./PaymentAccount";

export interface PaypalInformationRoot {
  createdAt: string;

  email: string;

  id: string;

  paymentAccount: PaymentAccountRoot;
}

export const PaypalInformation: IPaypalInformation.Resolver<Types> = {
  createdAt: async (root, args, ctx, info) => {
    return null;
  },
  email: async (root, args, ctx, info) => {
    return null;
  },
  id: async (root, args, ctx, info) => {
    return null;
  },
  paymentAccount: async (root, args, ctx, info) => {
    return null;
  }
};

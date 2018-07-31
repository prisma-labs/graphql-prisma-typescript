import { GraphQLResolveInfo } from 'graphql'

export namespace IMutation {
  export interface SignupArgs {
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string
  }

  export interface LoginArgs {
    email: string
    password: string
  }

  export interface AddPaymentMethodArgs {
    cardNumber: string
    expiresOnMonth: number
    expiresOnYear: number
    securityCode: string
    firstName: string
    lastName: string
    postalCode: string
    country: string
  }

  export interface BookArgs {
    placeId: string
    checkIn: string
    checkOut: string
    numGuests: number
  }

  export type SignupResolver<Ctx, MutationRoot, AuthPayloadRoot> = (
    root: MutationRoot,
    args: SignupArgs,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => AuthPayloadRoot | Promise<AuthPayloadRoot>

  export type LoginResolver<Ctx, MutationRoot, AuthPayloadRoot> = (
    root: MutationRoot,
    args: LoginArgs,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => AuthPayloadRoot | Promise<AuthPayloadRoot>

  export type AddPaymentMethodResolver<
    Ctx,
    MutationRoot,
    MutationResultRoot
  > = (
    root: MutationRoot,
    args: AddPaymentMethodArgs,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => MutationResultRoot | Promise<MutationResultRoot>

  export type BookResolver<Ctx, MutationRoot, MutationResultRoot> = (
    root: MutationRoot,
    args: BookArgs,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => MutationResultRoot | Promise<MutationResultRoot>

  export interface Resolver<
    Ctx,
    MutationRoot,
    AuthPayloadRoot,
    MutationResultRoot
  > {
    signup: SignupResolver<Ctx, MutationRoot, AuthPayloadRoot>
    login: LoginResolver<Ctx, MutationRoot, AuthPayloadRoot>
    addPaymentMethod: AddPaymentMethodResolver<
      Ctx,
      MutationRoot,
      MutationResultRoot
    >
    book: BookResolver<Ctx, MutationRoot, MutationResultRoot>
  }
}

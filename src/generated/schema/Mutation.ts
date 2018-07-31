import { GraphQLResolveInfo } from 'graphql'

export interface Mutation_signup_arg {
  email: string
  password: string
  firstName: string
  lastName: string
  phone: string
}

export interface Mutation_login_arg {
  email: string
  password: string
}

export interface Mutation_addPaymentMethod_arg {
  cardNumber: string
  expiresOnMonth: number
  expiresOnYear: number
  securityCode: string
  firstName: string
  lastName: string
  postalCode: string
  country: string
}

export interface Mutation_book_arg {
  placeId: string
  checkIn: string
  checkOut: string
  numGuests: number
}

export interface IMutation<
  Ctx,
  MutationRoot,
  AuthPayloadRoot,
  MutationResultRoot
> {
  signup: (
    root: MutationRoot,
    args: Mutation_signup_arg,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => AuthPayloadRoot | Promise<AuthPayloadRoot>

  login: (
    root: MutationRoot,
    args: Mutation_login_arg,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => AuthPayloadRoot | Promise<AuthPayloadRoot>

  addPaymentMethod: (
    root: MutationRoot,
    args: Mutation_addPaymentMethod_arg,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => MutationResultRoot | Promise<MutationResultRoot>

  book: (
    root: MutationRoot,
    args: Mutation_book_arg,
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => MutationResultRoot | Promise<MutationResultRoot>
}

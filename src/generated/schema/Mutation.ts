import { ITypes, ResolverFn } from '.'

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

  export type SignupResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    SignupArgs,
    T['Context'],
    T['AuthPayloadRoot']
  >

  export type LoginResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    LoginArgs,
    T['Context'],
    T['AuthPayloadRoot']
  >

  export type AddPaymentMethodResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    AddPaymentMethodArgs,
    T['Context'],
    T['MutationResultRoot']
  >

  export type BookResolver<T extends ITypes> = ResolverFn<
    T['MutationRoot'],
    BookArgs,
    T['Context'],
    T['MutationResultRoot']
  >

  export interface Resolver<T extends ITypes> {
    signup: SignupResolver<T>
    login: LoginResolver<T>
    addPaymentMethod: AddPaymentMethodResolver<T>
    book: BookResolver<T>
  }
}

import { ITypes, ResolverFn } from '.'

export namespace IAuthPayload {
  export type TokenResolver<T extends ITypes> = ResolverFn<
    T['AuthPayloadRoot'],
    {},
    T['Context'],
    string
  >

  export type UserResolver<T extends ITypes> = ResolverFn<
    T['AuthPayloadRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export interface Resolver<T extends ITypes> {
    token: TokenResolver<T>
    user: UserResolver<T>
  }
}

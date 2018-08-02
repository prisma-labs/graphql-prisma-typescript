import { ITypes, ResolverFn } from '.'

export namespace IMutationResult {
  export type SuccessResolver<T extends ITypes> = ResolverFn<
    T['MutationResultRoot'],
    {},
    T['Context'],
    boolean
  >

  export interface Resolver<T extends ITypes> {
    success: SuccessResolver<T>
  }
}

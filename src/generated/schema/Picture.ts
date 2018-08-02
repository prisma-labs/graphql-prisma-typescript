import { ITypes, ResolverFn } from '.'

export namespace IPicture {
  export type UrlResolver<T extends ITypes> = ResolverFn<
    T['PictureRoot'],
    {},
    T['Context'],
    string
  >

  export interface Resolver<T extends ITypes> {
    url: UrlResolver<T>
  }
}

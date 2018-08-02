import { ITypes, ResolverFn } from '.'

export namespace IViewer {
  export type MeResolver<T extends ITypes> = ResolverFn<
    T['ViewerRoot'],
    {},
    T['Context'],
    T['UserRoot']
  >

  export type BookingsResolver<T extends ITypes> = ResolverFn<
    T['ViewerRoot'],
    {},
    T['Context'],
    T['BookingRoot'][]
  >

  export interface Resolver<T extends ITypes> {
    me: MeResolver<T>
    bookings: BookingsResolver<T>
  }
}

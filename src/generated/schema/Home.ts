import { ResolverFn, ITypes } from './'

export namespace IHome {
  export interface PicturesArgs {
    first: number
  }

  export type IdResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    string
  >

  export type NameResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    string
  >

  export type DescriptionResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    string
  >

  export type NumRatingsResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    number
  >

  export type AvgRatingResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    number
  >

  export type PicturesResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    PicturesArgs,
    T['Context'],
    T['PictureRoot'][]
  >

  export type PerNightResolver<T extends ITypes> = ResolverFn<
    T['HomeRoot'],
    {},
    T['Context'],
    number
  >

  export interface Resolver<T extends ITypes> {
    id: IdResolver<T>
    name: NameResolver<T>
    description: DescriptionResolver<T>
    numRatings: NumRatingsResolver<T>
    avgRating: AvgRatingResolver<T>
    pictures: PicturesResolver<T>
    perNight: PerNightResolver<T>
  }
}

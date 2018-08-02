import { IAuthPayload } from './AuthPayload'
import { IBooking } from './Booking'
import { ICity } from './City'
import { IExperience } from './Experience'
import { IExperiencesByCity } from './ExperiencesByCity'
import { IHome } from './Home'
import { IMutation } from './Mutation'
import { IMutationResult } from './MutationResult'
import { IPicture } from './Picture'
import { IQuery } from './Query'
import { IUser } from './User'
import { IViewer } from './Viewer'
import { GraphQLResolveInfo } from 'graphql'

export * from './AuthPayload'
export * from './Booking'
export * from './City'
export * from './Experience'
export * from './ExperiencesByCity'
export * from './Home'
export * from './Mutation'
export * from './MutationResult'
export * from './Picture'
export * from './Query'
export * from './User'
export * from './Viewer'

export interface ResolverFn<Root, Args, Ctx, Payload> {
  (root: Root, args: Args, ctx: Ctx, info: GraphQLResolveInfo):
    | Payload
    | Promise<Payload>
}

export interface ITypes {
  Context: any
  AuthPayloadRoot: any
  BookingRoot: any
  CityRoot: any
  ExperienceRoot: any
  ExperiencesByCityRoot: any
  HomeRoot: any
  MutationRoot: any
  MutationResultRoot: any
  PictureRoot: any
  QueryRoot: any
  UserRoot: any
  ViewerRoot: any
}

export interface IResolvers<T extends ITypes> {
  AuthPayload: IAuthPayload.Resolver<T>
  Booking: IBooking.Resolver<T>
  City: ICity.Resolver<T>
  Experience: IExperience.Resolver<T>
  ExperiencesByCity: IExperiencesByCity.Resolver<T>
  Home: IHome.Resolver<T>
  Mutation: IMutation.Resolver<T>
  MutationResult: IMutationResult.Resolver<T>
  Picture: IPicture.Resolver<T>
  Query: IQuery.Resolver<T>
  User: IUser.Resolver<T>
  Viewer: IViewer.Resolver<T>
}

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

export interface IResolvers<
  Ctx,
  AuthPayloadRoot,
  BookingRoot,
  CityRoot,
  ExperienceRoot,
  ExperienceByCityRoot,
  HomeRoot,
  MutationRoot,
  MutationResultRoot,
  PictureRoot,
  QueryRoot,
  UserRoot,
  ViewerRoot
> {
  AuthPayload: IAuthPayload.Resolver<Ctx, AuthPayloadRoot, UserRoot>
  Booking: IBooking.Resolver<Ctx, BookingRoot>
  City: ICity.Resolver<Ctx, CityRoot>
  Experience: IExperience.Resolver<Ctx, ExperienceRoot>
  ExperiencesByCity: IExperiencesByCity.Resolver<
    Ctx,
    ExperienceByCityRoot,
    ExperienceRoot,
    CityRoot
  >
  Home: IHome.Resolver<Ctx, HomeRoot, PictureRoot>
  Mutation: IMutation.Resolver<
    Ctx,
    MutationRoot,
    AuthPayloadRoot,
    MutationResultRoot
  >
  MutationResult: IMutationResult.Resolver<Ctx, MutationResultRoot>
  Picture: IPicture.Resolver<Ctx, PictureRoot>
  Query: IQuery.Resolver<Ctx, QueryRoot, HomeRoot>
  User: IUser.Resolver<Ctx, UserRoot>
  Viewer: IViewer.Resolver<Ctx, ViewerRoot, UserRoot, BookingRoot>
}

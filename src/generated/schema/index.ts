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
  AuthPayload: IAuthPayload<Ctx, AuthPayloadRoot, UserRoot>
  Booking: IBooking<Ctx, BookingRoot>
  City: ICity<Ctx, CityRoot>
  Experience: IExperience<Ctx, ExperienceRoot>
  ExperiencesByCity: IExperiencesByCity<
    Ctx,
    ExperienceByCityRoot,
    ExperienceRoot,
    CityRoot
  >
  Home: IHome<Ctx, HomeRoot, PictureRoot>
  Mutation: IMutation<Ctx, MutationRoot, AuthPayloadRoot, MutationResultRoot>
  MutationResult: IMutationResult<Ctx, MutationResultRoot>
  Picture: IPicture<Ctx, PictureRoot>
  Query: IQuery<Ctx, QueryRoot, HomeRoot>
  User: IUser<Ctx, UserRoot>
  Viewer: IViewer<Ctx, ViewerRoot, UserRoot, BookingRoot>
}

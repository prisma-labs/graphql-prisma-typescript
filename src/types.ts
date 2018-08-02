import { ITypes } from './generated/schema'
import { AuthPayloadRoot } from './resolvers/AuthPayload'
import { MutationResultRoot } from './resolvers/MutationResult'
import { HomeRoot } from './resolvers/Home'
import { PictureRoot } from './resolvers/Picture'
import { Prisma } from './generated/prisma'
import { BookingRoot } from './resolvers/Booking'
import { CityRoot } from './resolvers/City'
import { ExperienceRoot } from './resolvers/Experience'
import { ExperiencesByCityRoot } from './resolvers/ExperiencesByCity'
import { UserRoot } from './resolvers/User'
import { ViewerRoot } from './resolvers/Viewer'

export interface Context {
  db: Prisma
  request: any
}

export interface Types extends ITypes {
  Context: Context
  AuthPayloadRoot: AuthPayloadRoot
  BookingRoot: BookingRoot
  CityRoot: CityRoot
  ExperienceRoot: ExperienceRoot
  ExperiencesByCityRoot: ExperiencesByCityRoot
  HomeRoot: HomeRoot
  MutationRoot: {}
  MutationResultRoot: MutationResultRoot
  PictureRoot: PictureRoot
  QueryRoot: {}
  UserRoot: UserRoot
  ViewerRoot: ViewerRoot
}

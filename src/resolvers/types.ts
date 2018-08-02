import { ITypes } from '../generated/schema'
import { Context } from '../utils'
import { AuthPayloadRoot } from './AuthPayload'
import { MutationResultRoot } from './MutationResult'
import { HomeRoot } from './Home'
import { PictureRoot } from './Picture'

export interface Types extends ITypes {
  Context: Context
  MutationRoot: {}
  AuthPayloadRoot: AuthPayloadRoot
  MutationResultRoot: MutationResultRoot
  HomeRoot: HomeRoot
  PictureRoot: PictureRoot
}

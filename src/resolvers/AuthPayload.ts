import { Context } from '../utils'
import { UserRoot } from './User'
import { IAuthPayload } from '../generated/schema'

export interface AuthPayloadRoot {
  token: string
  user: UserRoot
}

export const AuthPayload: IAuthPayload.Resolver<
  Context,
  AuthPayloadRoot,
  UserRoot
> = {
  token: root => root.token,
  user: async (root, args, ctx) => root.user,
}

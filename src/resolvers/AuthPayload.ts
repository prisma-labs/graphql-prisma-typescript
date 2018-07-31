import { Context } from '../utils'
import { UserRoot } from './User'
import { IAuthPayload } from '../generated/schema/AuthPayload'

export interface AuthPayloadRoot {
  token: string
  user: UserRoot
}

export const AuthPayload: IAuthPayload<Context, AuthPayloadRoot, UserRoot> = {
  token: (root: AuthPayloadRoot) => root.token,
  user: async (root: AuthPayloadRoot, args: {}, ctx: Context) => root.user,
}

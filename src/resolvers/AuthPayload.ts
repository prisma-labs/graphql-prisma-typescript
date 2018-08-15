import { UserRoot } from './User'
import { IAuthPayload } from '../generated/schema'
import { Types } from '../types'

export interface AuthPayloadRoot {
  token: string
  user: UserRoot
}

export const AuthPayload: IAuthPayload.Resolver<Types> = {
  token: root => root.token,
  user: async (root, args, ctx) => root.user,
}

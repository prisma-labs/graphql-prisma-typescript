import { IAuthPayload } from './generated/interfaces'
import { Types } from './types'

import { UserRoot } from './User'

export interface AuthPayloadRoot {
  token: string
  user: UserRoot
}

export const AuthPayload: IAuthPayload.Resolver<Types> = {
  token: async root => root.token,
  user: async root => root.user,
}

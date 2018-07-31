import { IUser } from '../generated/schema/User'
import { Context } from '../utils'

export interface UserRoot {
  id: string
  createdAt: Date | string
  email: string
  firstName: string
  isSuperHost: boolean
  lastName: string
  phone: string
  responseRate?: number
  responseTime?: number
  updatedAt: Date | string
  token: string
}

export const User: IUser<Context, UserRoot> = {}

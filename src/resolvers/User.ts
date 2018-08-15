import { IUser } from '../generated/schema/User'
import { Types } from '../types'

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

// TODO
export const User: IUser.Resolver<Types> = {}

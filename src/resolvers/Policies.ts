import { IPolicies } from './generated/interfaces'
import { Types } from './types'

export interface PoliciesRoot {
  checkInEndTime: number
  checkInStartTime: number
  checkoutTime: number
  createdAt: string
  id: string
  updatedAt: string
}

export const Policies: IPolicies.Resolver<Types> = {
  checkInEndTime: async root => root.checkInEndTime,
  checkInStartTime: async root => root.checkInStartTime,
  checkoutTime: async root => root.checkoutTime,
  createdAt: async root => root.createdAt,
  id: async root => root.id,
  updatedAt: async root => root.updatedAt,
}

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
  checkInEndTime: root => root.checkInEndTime,
  checkInStartTime: root => root.checkInStartTime,
  checkoutTime: root => root.checkoutTime,
  createdAt: root => root.createdAt,
  id: root => root.id,
  updatedAt: root => root.updatedAt,
}

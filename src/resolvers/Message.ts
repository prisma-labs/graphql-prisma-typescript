import { IMessage } from './generated/interfaces'
import { Types } from './types'

export interface MessageRoot {
  createdAt: string
  deliveredAt: string
  id: string
  readAt: string
}

export const Message: IMessage.Resolver<Types> = {
  createdAt: async root => root.createdAt,
  deliveredAt: async root => root.deliveredAt,
  id: async root => root.id,
  readAt: async root => root.readAt,
}

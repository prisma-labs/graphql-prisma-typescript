import { IMessage } from '../generated/resolvers'
import { Types } from '../types/types'

export interface MessageRoot {
  createdAt: string
  deliveredAt: string
  id: string
  readAt: string
}

export const Message: IMessage.Resolver<Types> = {
  createdAt: root => root.createdAt,
  deliveredAt: root => root.deliveredAt,
  id: root => root.id,
  readAt: root => root.readAt,
}

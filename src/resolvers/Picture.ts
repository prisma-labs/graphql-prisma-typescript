import { IPicture } from './src/generated/resolvers'
import { Types } from './types'

export interface PictureRoot {
  id: string
  url: string
}

export const Picture: IPicture.Resolver<Types> = {
  id: root => root.id,
  url: root => root.url,
}

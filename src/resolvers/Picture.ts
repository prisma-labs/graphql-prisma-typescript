import { IPicture } from '../generated/resolvers'
import { Types } from './types'

export interface PictureRoot {
  url: string
}

export const Picture: IPicture.Resolver<Types> = {
  url: root => root.url,
}

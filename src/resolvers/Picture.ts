import { IPicture } from '../generated/schema'
import { Types } from '../types'

export interface PictureRoot {
  url: string
}

export const Picture: IPicture.Resolver<Types> = {
  url: root => root.url,
}

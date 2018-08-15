import { IPicture } from './generated/interfaces.ts'
import { Types } from './types'

export interface PictureRoot {
  id: string
  url: string
}

export const Picture: IPicture.Resolver<Types> = {
  id: async root => root.id,
  url: async root => root.url,
}

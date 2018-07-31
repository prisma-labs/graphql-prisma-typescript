import { IPicture } from '../generated/schema'

export interface PictureRoot {
  url: string
}

export const Picture: IPicture.Resolver<{}, PictureRoot> = {
  url: root => root.url,
}

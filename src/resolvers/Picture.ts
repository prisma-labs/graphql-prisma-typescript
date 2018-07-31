import { IPicture } from '../generated/schema/Picture'

export interface PictureRoot {
  url: string
}

export const Picture: IPicture<{}, PictureRoot> = {
  url: (root: PictureRoot) => root.url,
}

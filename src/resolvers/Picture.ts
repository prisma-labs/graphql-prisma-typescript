import { IPicture } from '../generated/schema/Picture'

export interface PictureScalars {
  url: string
}

export const Picture: IPicture<{}, PictureScalars> = {
  url: (root: PictureScalars) => root.url,
}

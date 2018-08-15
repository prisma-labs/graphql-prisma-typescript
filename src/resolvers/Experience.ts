import { IExperience } from './generated/interfaces'
import { Types } from './types'

import { ExperienceCategoryRoot } from './ExperienceCategory'
import { LocationRoot } from './Location'
import { ReviewRoot } from './Review'
import { PictureRoot } from './Picture'

export interface ExperienceRoot {
  id: string
  category: ExperienceCategoryRoot
  title: string
  location: LocationRoot
  pricePerPerson: number
  reviews: ReviewRoot[]
  preview: PictureRoot
  popularity: number
}

export const Experience: IExperience.Resolver<Types> = {
  id: async root => root.id,
  category: async root => root.category,
  title: async root => root.title,
  location: async root => root.location,
  pricePerPerson: async root => root.pricePerPerson,
  reviews: async root => root.reviews,
  preview: async root => root.preview,
  popularity: async root => root.popularity,
}

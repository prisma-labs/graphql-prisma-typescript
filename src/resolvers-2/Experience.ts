import { IExperience } from '../generated/resolvers'
import { Types } from './types'
import { ExperienceCategoryRoot } from './ExperienceCategory'
import { LocationRoot } from './Location'
import { ReviewRoot } from './Review'
import { PictureRoot } from './Picture'

export interface ExperienceRoot {
  id: string
  category?: ExperienceCategoryRoot
  title: string
  location: LocationRoot
  pricePerPerson: number
  reviews: ReviewRoot[]
  preview: PictureRoot
  popularity: number
}

export const Experience: IExperience.Resolver<Types> = {
  id: root => root.id,
  category: root => root.category,
  title: root => root.title,
  location: root => root.location,
  pricePerPerson: root => root.pricePerPerson,
  reviews: root => root.reviews,
  preview: root => root.preview,
  popularity: root => root.popularity,
}

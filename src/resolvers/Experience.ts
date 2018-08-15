import { IExperience } from '../generated/resolvers'
import { Types } from './types'
import { ExperienceCategoryRoot } from './ExperienceCategory'
import { LocationRoot } from './Location'
import { ReviewRoot } from './Review'
import { PictureRoot } from './Picture'

export interface ExperienceRoot {
  id: string
  title: string
  pricePerPerson: number
  reviews: ReviewRoot[]
  preview: PictureRoot
  popularity: number
}

export const Experience: IExperience.Resolver<Types> = {
  id: root => root.id,
  category: (root, args, ctx) => {
    return ctx.db.query.experience({ where: { id: root.id } }).category()
  },
  title: root => root.title,
  location: (root, args, ctx) => {
    return ctx.db.query.experience({ where: { id: root.id } }).location()
  },
  pricePerPerson: root => root.pricePerPerson,
  reviews: (root, args, ctx) => {
    return ctx.db.query.experience({ where: { id: root.id } }).reviews()
  },
  preview: root => root.preview,
  popularity: root => root.popularity,
}

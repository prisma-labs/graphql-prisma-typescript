import { Context } from '../utils'

export const ExperiencesByCity = {
  city: async ({ id }, args, ctx: Context, info) => {
    return ctx.db.query.City({ id }, info)
  },

  experiences: async ({ id }, args, ctx: Context, info) => {
    return ctx.db.query.allExperiences(
      { filter: { location: { neighbourHood: { city: { id } } } } },
      info,
    )
  },
}

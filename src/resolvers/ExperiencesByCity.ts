import { Context } from '../utils'

export const ExperiencesByCity = {
  city: async ({ id }, args, ctx: Context, info) => {
    return ctx.db.query.city({ where: { id } }, info)
  },

  experiences: async ({ id }, args, ctx: Context, info) => {
    return ctx.db.query.experiences(
      { where: { location: { neighbourHood: { city: { id } } } } },
      info,
    )
  },
}

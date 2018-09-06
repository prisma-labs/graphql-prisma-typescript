import { getUserId, Context } from '../../utils'

export const locations = {
  async addLocation(parent, { location }, ctx: Context, info) {
    const id = getUserId(ctx)

    const createdLocation = await ctx.db.mutation.createLocation({
      data: {
        ...location,
        user: { connect: { id } },
      },
    })
    
    return {
      success: !!createdLocation,
    }
  },
}

import { Context } from '../utils'

export const Subscription = {
  city: {
    subscribe: async (parent, args, ctx: Context, info) => {
      return ctx.db.subscription.city({}, info)
    },
  },
}

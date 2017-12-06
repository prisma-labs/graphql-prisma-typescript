import { getUserId, Context } from '../../utils'

export async function addPaymentMethod(parent, args, ctx: Context, info) {
  const userId = getUserId(ctx)
  await ctx.db.mutation.createPaymentAccount({ creditcard: args, userId })

  // TODO: send email to user
  return { success: true }
}

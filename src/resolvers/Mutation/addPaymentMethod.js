import { getUserId, Context } from '../../utils'

export async function addPaymentMethod(parent, args, ctx, info) {
  const userId = getUserId(ctx)
  await ctx.db.mutation.createPaymentAccount({
    data: {
      creditcard: { create: args },
      user: { connect: { id: userId } },
    },
  })

  // TODO: send email to user
  return { success: true }
}

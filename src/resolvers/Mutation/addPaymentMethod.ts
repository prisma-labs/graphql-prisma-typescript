import { getUserId, Context } from '../../utils'
import { Mutation_addPaymentMethod_arg } from '../../generated/schema/Mutation'

export async function addPaymentMethod(
  parent: {},
  args: Mutation_addPaymentMethod_arg,
  ctx: Context,
) {
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

import { getUserId, Context } from '../../utils'
import { IMutation } from '../../generated/schema'
import { MutationResultRoot } from '../MutationResult'

export const addPaymentMethod: IMutation.AddPaymentMethodResolver<
  Context,
  {},
  MutationResultRoot
> = async (parent, args, ctx: Context) => {
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

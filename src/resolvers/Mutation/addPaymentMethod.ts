import { getUserId } from '../../utils'
import { IMutation } from '../../generated/resolvers'
import { Types } from '../types'

export const addPaymentMethod: IMutation.AddPaymentMethodResolver<
  Types
> = async (root, args, ctx) => {
  const userId = getUserId(ctx)
  await ctx.db.createPaymentAccount({
    creditcard: { create: args },
    user: { connect: { id: userId } },
  })

  // TODO: send email to user
  return { success: true }
}

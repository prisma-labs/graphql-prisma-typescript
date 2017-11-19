import { getUserId } from '../../utils'

export async function addPaymentMethod(parent, args, ctx, info) {
  const userId = getUserId(ctx)
  await ctx.remote.request(`mutation addPaymentMethod(
    $userId: ID!
    $creditCard: PaymentAccountcreditcardCreditCardInformation
  ) {
    createPaymentAccount(userId: $userId creditcard: $creditCard) {
      id
    }
  }`, {...args, userId})

  // TODO: send email to user

  return info.delegateQuery('User', {id: userId}, {}, {}, info)
}

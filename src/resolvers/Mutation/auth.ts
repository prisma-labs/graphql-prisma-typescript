import * as bcrypt from 'bcryptjs'
import { AuthError, Context } from '../../utils'
import * as jwt from 'jsonwebtoken'
import { IMutation } from '../../generated/schema'
import { AuthPayloadRoot } from '../AuthPayload'

export const signup: IMutation.SignupResolver<
  Context,
  {},
  AuthPayloadRoot
> = async (root, args, ctx) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await ctx.db.mutation.createUser({
    data: { ...args, password },
  })
  const token: string = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  return { token, user }
}

export const login: IMutation.LoginResolver<
  Context,
  {},
  AuthPayloadRoot
> = async (root, args, ctx) => {
  const user = await ctx.db.query.user({ where: { email: args.email } })
  const valid = await bcrypt.compare(args.password, user ? user.password : '')

  if (!valid || !user) {
    throw new AuthError()
  }

  const token: string = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  return { token, user }
}

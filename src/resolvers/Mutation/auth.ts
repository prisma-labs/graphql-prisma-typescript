import * as bcrypt from 'bcryptjs'
import { AuthError } from '../../utils'
import * as jwt from 'jsonwebtoken'
import { IMutation } from '../../generated/resolvers'
import { Types } from '../types'

export const signup: IMutation.SignupResolver<Types> = async (
  root,
  args,
  ctx,
) => {
  const password = await bcrypt.hash(args.password, 10)
  const user = await ctx.db.createUser({
    ...args,
    password,
    responseRate: 0,
    responseTime: 0,
  })
  const token: string = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  return { token, user }
}

export const login: IMutation.LoginResolver<Types> = async (
  root,
  args,
  ctx,
) => {
  const user = await ctx.db.user({ email: args.email })
  const valid = await bcrypt.compare(args.password, user ? user.password : '')

  if (!valid || !user) {
    throw new AuthError()
  }

  const token: string = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

  return { token, user }
}

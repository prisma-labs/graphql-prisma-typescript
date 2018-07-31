import * as bcrypt from 'bcryptjs'
import { AuthError, Context } from '../../utils'
import * as jwt from 'jsonwebtoken'
import {
  Mutation_signup_arg,
  Mutation_login_arg,
} from '../../generated/schema/Mutation'

export const auth = {
  async signup(root: {}, args: Mutation_signup_arg, ctx: Context) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })
    const token: string = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

    return { token, user }
  },

  async login(root: {}, args: Mutation_login_arg, ctx: Context) {
    const user = await ctx.db.query.user({ where: { email: args.email } })
    const valid = await bcrypt.compare(args.password, user ? user.password : '')

    if (!valid || !user) {
      throw new AuthError()
    }

    const token: string = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

    return { token, user }
  },
}

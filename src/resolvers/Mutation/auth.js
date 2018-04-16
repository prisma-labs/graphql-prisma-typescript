import * as bcrypt from 'bcryptjs'
import { AuthError, Context } from '../../utils'
import * as jwt from 'jsonwebtoken'

export const auth = {
  async signup(parent, args, ctx, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },

  async login(parent, args, ctx, info) {
    const user = await ctx.db.query.user({ where: { email: args.email } })
    if (!user) {
      throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new AuthError()
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
}

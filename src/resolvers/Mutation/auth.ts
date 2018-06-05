import * as bcrypt from 'bcryptjs'
import { AuthError, Context } from '../../utils'
import * as jwt from 'jsonwebtoken'

export const auth = {
  async signup(parent, args, ctx: Context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },

  async login(parent, args, ctx: Context, info) {
    const user = await ctx.db.query.user({ where: { email: args.email } })
    const valid = await bcrypt.compare(args.password, user ? user.password : '')
    
    if (!valid || !user) {
      throw new AuthError()
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
}

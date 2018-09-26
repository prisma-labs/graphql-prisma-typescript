import { ContextParameters } from 'graphql-yoga/dist/types'
import { IncomingHttpHeaders } from 'http'
import * as jwt from 'jsonwebtoken'

import { prisma } from './prisma'

const getUserId = (authorization: IncomingHttpHeaders['authorization']) => {
  const re = new RegExp('^Bearer ')

  return () => {
    if (re.test(authorization)) {
      const [, token] = authorization.split(re, 2)

      const { userId } = jwt.verify(token, process.env.APP_SECRET!) as {
        userId: string
      }

      return userId
    }

    throw new Error('Unauthorized')
  }
}

export const context = ({ request }: ContextParameters) => {
  return {
    db: prisma,
    getUserId: getUserId(request.headers.authorization),
  }
}

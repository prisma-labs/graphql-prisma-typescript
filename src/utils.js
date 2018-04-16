import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'

// export interface Context {
//   db: Prisma
//   request: any
// }

export function getUserId(ctx) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

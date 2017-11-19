import * as jwt from 'jsonwebtoken'

export function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export async function authenticated(cb) {
  return (parent, args, context, info) => {
    getUserId(context)
    return cb(parent, args, context, info)
  }
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
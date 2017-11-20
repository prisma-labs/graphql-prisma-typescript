import * as bcrypt from 'bcryptjs'
import { AuthError } from '../../utils'

export const account = {
  async signup(parent, args, context, info) {
    const res = await context.remote.delegateMutation(
      'createUser',
      args,
      context,
      info,
    )
    const variables = {
      ...args,
      password: await bcrypt.hash(args.password, 10),
    }
    context.remote.request(
      `mutation ($email: String! $firstName: String! $lastName: String! $password: String! $phone: String!) {
          createUser(
            email: $email
            firstName: $firstName
            lastName: $lastName
            password: $password
            phone: $phone
          ) {
            id
          }
        }`,
      variables,
    )
    return context.remote.delegateQuery('User', { id: res.id }, context, info)
  },
  async login(parent, args, context, info) {
    const { User } = await context.remote.request(
      `query($email: String!){
          User(email: $email) {
            id
            password
          }
        }`,
      { email: args.email },
    )
    const valid = bcrypt.compare(args.password, User.password)
    if (!valid) {
      throw new AuthError()
    }

    return context.remote.delegateQuery('User', { id: User.id }, {}, info)
  },
}

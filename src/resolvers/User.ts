import * as jwt from 'jsonwebtoken'

export const User = {
  token: ({id}) => {
    return jwt.sign({ userId: id }, process.env.JWT_SECRET!)
  }
}
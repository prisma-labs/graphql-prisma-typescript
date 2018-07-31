import { GraphQLResolveInfo } from 'graphql'

export interface IAuthPayload<Ctx, AuthPayloadRoot, UserRoot> {
  token: (
    root: AuthPayloadRoot,
    args: {},
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => string | Promise<string>
  
  user: (
    root: AuthPayloadRoot,
    args: {},
    ctx: Ctx,
    info: GraphQLResolveInfo,
  ) => UserRoot | Promise<UserRoot>
}
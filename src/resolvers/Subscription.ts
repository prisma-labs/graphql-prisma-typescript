import { Context } from '../utils'
// import { WrapQuery } from 'graphql-tools'
// import { SelectionSetNode, Kind } from 'graphql'

export const Subscription = {
  city: {
    subscribe: async (parent, args, ctx: Context, info) => {
      return ctx.db.subscription.city({}, info, {
        // TODO reenable when https://github.com/apollographql/graphql-tools/issues/780 is solved
        // transforms: [
        //   new WrapQuery(
        //     ['city'],
        //     (subtree: SelectionSetNode) => ({
        //       kind: Kind.FIELD,
        //       name: {
        //         kind: Kind.NAME,
        //         value: 'node',
        //       },
        //       selectionSet: subtree,
        //     }),
        //     // result => result && result.node,
        //     result => {
        //       // TODO clean me up
        //       console.log({ result })
        //       return result && result.node
        //     },
        //   ),
        // ],
      })
    },
  },
}

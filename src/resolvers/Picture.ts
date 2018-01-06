import { getUserId, Context } from '../utils'

export const Picture = {
    async url(_, { id, x, y, height, width}, ctx: Context, info) {
        const userId = getUserId(ctx)
        const picture = ctx.db.query.picture({ where: { id }})

        return `endpoint://${width}x${height}`
    }
}
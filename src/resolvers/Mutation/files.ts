import { Context, getUserId } from '../../utils'

import { upload } from '../../files'

export const files = {
    async uploadPicture(_, { file }, ctx: Context, info) {
        const userId = getUserId(ctx)
    }
}
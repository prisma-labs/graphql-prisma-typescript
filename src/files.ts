import { S3 } from 'aws-sdk'
import { v4 as uuid } from 'uuid'

import { Context, getUserId } from './utils'

const bucket = new S3({
   accessKeyId: process.env.S3_ACCESS_KEY,
   secretAccessKey: process.env.S3_ACCESS_SECRET,
})

export const upload = async(file: File, ctx: Context) => {
    const user = getUserId(ctx)

    const name = file.filename
    const secret = uuid()
    const size = file.byteCount
    const contentType = file.contentType

    if (contentType !== 'image') {
        throw new UploadError()
    }

    const s3UploadResponse = await bucket.upload({
        Bucket: process.env.S3_UPLOAD_BUCKET,
        Key: secret,
        ACL: 'public-read',
        Body: file,
        ContentLength: size,
        ContentType: contentType
    }).promise()

    const gcUploadResponse = await ctx.db.mutation.createPicture({ data: {
        name,
        size,
        secret,
        contentType,
    }})

    return gcUploadResponse    
}

export class UploadError extends Error {
    constructor() {
        super('Error uploading file')
    }
}
import { S3 } from 'aws-sdk'
import { v4 as uuid } from 'uuid'
import * as mime from 'mime-types'

export interface S3File {
    name: string,
    secret: string,
    url: string,
    bucket: string
}

const client = new S3({
   accessKeyId: process.env.S3_ACCESS_KEY,
   secretAccessKey: process.env.S3_ACCESS_SECRET,
})

export const upload = async(file: File): Promise<S3File> => {
    const name = file.name
    const secret = uuid()
    const bucket = process.env.S3_UPLOAD_BUCKET
    const contentType = mime(name)

    if (!name.endsWith('/image')) {
        throw new UploadError()
    }

    try {
        const res = await client.upload({
            Bucket: process.env.S3_UPLOAD_BUCKET,
            Key: secret,
            ACL: 'public-read',
            Body: file,
            ContentType: contentType
        }).promise()

        return {
            name,
            url: res.Location,
            secret,
            bucket
        }
    } catch(err) {
        console.log(err);
        throw new UploadError()
    }
}

export class UploadError extends Error {
    constructor() {
        super('Error uploading file')
    }
}
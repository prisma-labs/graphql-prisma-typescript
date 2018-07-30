import { ReviewWhereInput, RequestParams } from './prisma'

export interface picturesForPlace extends RequestParams {
  Result: {
    place: {
      pictures: {
        url: string
      }[]
    }
  }
  Variables: {
    id: string
  }
}

export interface reviewsCountForPlace extends RequestParams {
  Result: {
    reviewsConnection: {
      aggregate: {
        count: number
      }
    }
  }
  Variables: {
    where: ReviewWhereInput
  }
}

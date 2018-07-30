import { QueryWithVariables } from './prisma'

export interface picturesForPlaceQueryResult {
  place: {
    pictures: {
      url: string
    }[]
  }
}
export interface picturesForPlaceQueryVariables {
  id: string
}

export function picturesForPlaceQuery(
  variables: picturesForPlaceQueryVariables,
): QueryWithVariables<
  picturesForPlaceQueryResult,
  picturesForPlaceQueryVariables
> {
  return {
    query: '...',
    variables,
  }
}

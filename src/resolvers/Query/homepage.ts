export const homepage = {
  topExperiences: async (parent, args, context, info) => {
    return context.remote.delegateQuery(
      'allExperiences',
      { orderBy: 'popularity_DESC' },
      context,
      info,
    )
  },
  topHomes: async (parent, args, context, info) => {
    return context.remote.delegateQuery(
      'allPlaces',
      { orderBy: 'popularity_DESC' },
      context,
      info,
    )
  },
  topReservations: async (parent, args, context, info) => {
    return context.remote.delegateQuery(
      'allRestaurants',
      { orderBy: 'popularity_DESC' },
      context,
      info,
    )
  },
  featuredDestinations: async (parent, args, context, info) => {
    return context.remote.delegateQuery(
      'allNeighbourhoods',
      { orderBy: 'popularity_DESC', filter: { featured: true } },
      context,
      info,
    )
  },
  experiencesByCity: async (parent, args, context, info) => {
    const result = await context.remote.request(`query ($cities: [String!]!) {
          allCities(filter: {
            name_in: $cities
            neighbourhoods_every: {
              locations_every: {
                experience: {
                  id_gt: "0"
                }
              }
            }
          }) {
            id
          }
        }`, {cities: args.cities})

    return result.allCities
  },
}
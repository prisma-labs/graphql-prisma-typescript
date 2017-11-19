import { GraphQLServer } from 'graphql-yoga'
import { fetchTypeDefs, RemoteSchema as Remote, collectTypeDefs, GraphcoolLink } from 'graphql-remote'
import * as fs from 'fs'

async function run() {

  const makeLink = () => new GraphcoolLink(process.env.GRAPHCOOL_SERVICE_ID, process.env.GRAPHCOOL_TOKEN)

  const graphcoolTypeDefs = await fetchTypeDefs(makeLink())

  const typeDefs = collectTypeDefs(graphcoolTypeDefs, `
    type Query {
      topExperiences: [Experience!]!
      topHomes: [Home!]!
      topReservations: [Reservation!]!
      featuredDestinations: [Neighbourhood!]!
      experiencesByCity(cities: [String!]!): [ExperiencesByCity!]!
    }
    
    type ExperiencesByCity {
      experiences: [Experience!]!
      city: City!
    }
    
    type Home {
      id: ID!
      name: String
      description: String!
      numRatings: Int!
      avgRating: Float!
      pictures(first: Int): [Picture!]!
    }
    
    type Reservation {
      id: ID!
      title: String!
      avgPricePerPerson: Int!
      pictures: [Picture!]!
      location: Location!
      isCurated: Boolean!
      slug: String!
      popularity: Int!
    }
    
    type Experience {
      id: ID!
      category: ExperienceCategory
      title: String!
      location: Location!
      pricePerPerson: Int!
      reviews: [Review!]!
      preview: Picture!
      popularity: Int!
    }
    
    type Review {
      accuracy: Int!
      checkIn: Int!
      cleanliness: Int!
      communication: Int!
      createdAt: DateTime!
      id: ID!
      location: Int!
      stars: Int!
      text: String!
      value: Int!
    }

    
    type Neighbourhood {
      id: ID!
      name: String!
      slug: String!
      homePreview: Picture
      city: City!
      featured: Boolean!
      popularity: Int!
    }
    
    type Location {
      id: ID!
      lat: Float!
      lng: Float!
      address: String
      directions: String
    }
    
    type Picture {
      id: ID!
      url: String!
    }
    
    type City {
      id: ID!
      name: String!
    }

    type ExperienceCategory {
      id: ID! @isUnique
      mainColor: String!
      name: String!
      experience: Experience
    }
  `)

  fs.writeFileSync('./typeDefs.graphql', typeDefs)

  const resolvers = {
    Query: {
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
    },
    ExperiencesByCity: {
      city: async ({ id }, args, context, info) => {
        return context.remote.delegateQuery( 'City', { id }, context, info)
      },
      experiences: async ({ id }, args, context, info) => {
        return context.remote.delegateQuery(
          'allExperiences',
          { filter: { location: { neighbourHood: { city: { id } } } } },
          context,
          info,
        )
      },
    },
    Home: {
      numRatings: async ({ id }, args, context, info) => {
        const result = await context.remote.request(`{
          Place(id: "${id}") {
            _reviewsMeta {
              count
            }
          }
        }`)
        return result.Place._reviewsMeta.count
      },
    },
  }

  const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: req => ({ req, remote: new Remote(makeLink()) }),
  })
  server.start(() => console.log('Server is running on localhost:4000'))
}

run().catch(console.log.bind(console))

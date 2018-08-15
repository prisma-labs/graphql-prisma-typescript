import { IGuestRequirements } from './src/generated/resolvers'
import { Types } from './types'

export interface GuestRequirementsRoot {
  govIssuedId: boolean
  guestTripInformation: boolean
  id: string
  recommendationsFromOtherHosts: boolean
}

export const GuestRequirements: IGuestRequirements.Resolver<Types> = {
  govIssuedId: root => root.govIssuedId,
  guestTripInformation: root => root.guestTripInformation,
  id: root => root.id,
  recommendationsFromOtherHosts: root => root.recommendationsFromOtherHosts,
}

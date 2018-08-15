import { IGuestRequirements } from './generated/interfaces'
import { Types } from './types'

export interface GuestRequirementsRoot {
  govIssuedId: boolean
  guestTripInformation: boolean
  id: string
  recommendationsFromOtherHosts: boolean
}

export const GuestRequirements: IGuestRequirements.Resolver<Types> = {
  govIssuedId: async root => root.govIssuedId,
  guestTripInformation: async root => root.guestTripInformation,
  id: async root => root.id,
  recommendationsFromOtherHosts: async root =>
    root.recommendationsFromOtherHosts,
}

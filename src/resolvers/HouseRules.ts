import { IHouseRules } from './generated/interfaces.ts'
import { Types } from './types'

export interface HouseRulesRoot {
  additionalRules: string
  createdAt: string
  id: string
  partiesAndEventsAllowed: boolean
  petsAllowed: boolean
  smokingAllowed: boolean
  suitableForChildren: boolean
  suitableForInfants: boolean
  updatedAt: string
}

export const HouseRules: IHouseRules.Resolver<Types> = {
  additionalRules: async root => root.additionalRules,
  createdAt: async root => root.createdAt,
  id: async root => root.id,
  partiesAndEventsAllowed: async root => root.partiesAndEventsAllowed,
  petsAllowed: async root => root.petsAllowed,
  smokingAllowed: async root => root.smokingAllowed,
  suitableForChildren: async root => root.suitableForChildren,
  suitableForInfants: async root => root.suitableForInfants,
  updatedAt: async root => root.updatedAt,
}

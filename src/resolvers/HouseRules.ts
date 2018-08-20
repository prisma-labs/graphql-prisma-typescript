import { IHouseRules } from '../generated/resolvers'
import { Types } from './types'

export interface HouseRulesRoot {
  additionalRules?: string | null
  createdAt: string
  id: string
  partiesAndEventsAllowed?: boolean | null
  petsAllowed?: boolean | null
  smokingAllowed?: boolean | null
  suitableForChildren?: boolean | null
  suitableForInfants?: boolean | null
  updatedAt: string
}

export const HouseRules: IHouseRules.Resolver<Types> = {
  additionalRules: root => root.additionalRules,
  createdAt: root => root.createdAt,
  id: root => root.id,
  partiesAndEventsAllowed: root => root.partiesAndEventsAllowed,
  petsAllowed: root => root.petsAllowed,
  smokingAllowed: root => root.smokingAllowed,
  suitableForChildren: root => root.suitableForChildren,
  suitableForInfants: root => root.suitableForInfants,
  updatedAt: root => root.updatedAt,
}

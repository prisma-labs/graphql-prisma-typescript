import { IPricing } from './generated/interfaces.ts'
import { Types } from './types'

export type CURRENCYRoot = 'CAD' | 'CHF' | 'EUR' | 'JPY' | 'USD' | 'ZAR'

export interface PricingRoot {
  averageMonthly: number
  averageWeekly: number
  basePrice: number
  cleaningFee: number
  currency: CURRENCYRoot
  extraGuests: number
  id: string
  monthlyDiscount: number
  perNight: number
  securityDeposit: number
  smartPricing: boolean
  weekendPricing: number
  weeklyDiscount: number
}

export const Pricing: IPricing.Resolver<Types> = {
  averageMonthly: async root => root.averageMonthly,
  averageWeekly: async root => root.averageWeekly,
  basePrice: async root => root.basePrice,
  cleaningFee: async root => root.cleaningFee,
  currency: async root => root.currency,
  extraGuests: async root => root.extraGuests,
  id: async root => root.id,
  monthlyDiscount: async root => root.monthlyDiscount,
  perNight: async root => root.perNight,
  securityDeposit: async root => root.securityDeposit,
  smartPricing: async root => root.smartPricing,
  weekendPricing: async root => root.weekendPricing,
  weeklyDiscount: async root => root.weeklyDiscount,
}

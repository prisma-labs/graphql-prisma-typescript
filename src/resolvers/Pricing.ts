import { IPricing } from './generated/interfaces'
import { Types } from './types'

export type CURRENCYRoot = 'CAD' | 'CHF' | 'EUR' | 'JPY' | 'USD' | 'ZAR'

export interface PricingRoot {
  averageMonthly: number
  averageWeekly: number
  basePrice: number
  cleaningFee: number | null
  currency: CURRENCYRoot | null
  extraGuests: number | null
  id: string
  monthlyDiscount: number | null
  perNight: number
  securityDeposit: number | null
  smartPricing: boolean
  weekendPricing: number | null
  weeklyDiscount: number | null
}

export const Pricing: IPricing.Resolver<Types> = {
  averageMonthly: root => root.averageMonthly,
  averageWeekly: root => root.averageWeekly,
  basePrice: root => root.basePrice,
  cleaningFee: root => root.cleaningFee,
  currency: root => root.currency,
  extraGuests: root => root.extraGuests,
  id: root => root.id,
  monthlyDiscount: root => root.monthlyDiscount,
  perNight: root => root.perNight,
  securityDeposit: root => root.securityDeposit,
  smartPricing: root => root.smartPricing,
  weekendPricing: root => root.weekendPricing,
  weeklyDiscount: root => root.weeklyDiscount,
}

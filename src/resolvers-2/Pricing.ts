import { IPricing } from '../generated/resolvers'
import { Types } from './types'

export type CURRENCY = 'CAD' | 'CHF' | 'EUR' | 'JPY' | 'USD' | 'ZAR'

export interface PricingRoot {
  averageMonthly: number
  averageWeekly: number
  basePrice: number
  cleaningFee?: number
  currency?: CURRENCY
  extraGuests?: number
  id: string
  monthlyDiscount?: number
  perNight: number
  securityDeposit?: number
  smartPricing: boolean
  weekendPricing?: number
  weeklyDiscount?: number
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

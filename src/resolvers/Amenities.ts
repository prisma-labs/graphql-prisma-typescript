import { IAmenities } from './generated/interfaces'
import { Types } from './types'

export interface AmenitiesRoot {
  airConditioning: boolean
  babyBath: boolean
  babyMonitor: boolean
  babysitterRecommendations: boolean
  bathtub: boolean
  breakfast: boolean
  buzzerWirelessIntercom: boolean
  cableTv: boolean
  changingTable: boolean
  childrensBooksAndToys: boolean
  childrensDinnerware: boolean
  crib: boolean
  doorman: boolean
  dryer: boolean
  elevator: boolean
  essentials: boolean
  familyKidFriendly: boolean
  freeParkingOnPremises: boolean
  freeParkingOnStreet: boolean
  gym: boolean
  hairDryer: boolean
  hangers: boolean
  heating: boolean
  hotTub: boolean
  id: string
  indoorFireplace: boolean
  internet: boolean
  iron: boolean
  kitchen: boolean
  laptopFriendlyWorkspace: boolean
  paidParkingOffPremises: boolean
  petsAllowed: boolean
  pool: boolean
  privateEntrance: boolean
  shampoo: boolean
  smokingAllowed: boolean
  suitableForEvents: boolean
  tv: boolean
  washer: boolean
  wheelchairAccessible: boolean
  wirelessInternet: boolean
}

export const Amenities: IAmenities.Resolver<Types> = {
  airConditioning: async root => root.airConditioning,
  babyBath: async root => root.babyBath,
  babyMonitor: async root => root.babyMonitor,
  babysitterRecommendations: async root => root.babysitterRecommendations,
  bathtub: async root => root.bathtub,
  breakfast: async root => root.breakfast,
  buzzerWirelessIntercom: async root => root.buzzerWirelessIntercom,
  cableTv: async root => root.cableTv,
  changingTable: async root => root.changingTable,
  childrensBooksAndToys: async root => root.childrensBooksAndToys,
  childrensDinnerware: async root => root.childrensDinnerware,
  crib: async root => root.crib,
  doorman: async root => root.doorman,
  dryer: async root => root.dryer,
  elevator: async root => root.elevator,
  essentials: async root => root.essentials,
  familyKidFriendly: async root => root.familyKidFriendly,
  freeParkingOnPremises: async root => root.freeParkingOnPremises,
  freeParkingOnStreet: async root => root.freeParkingOnStreet,
  gym: async root => root.gym,
  hairDryer: async root => root.hairDryer,
  hangers: async root => root.hangers,
  heating: async root => root.heating,
  hotTub: async root => root.hotTub,
  id: async root => root.id,
  indoorFireplace: async root => root.indoorFireplace,
  internet: async root => root.internet,
  iron: async root => root.iron,
  kitchen: async root => root.kitchen,
  laptopFriendlyWorkspace: async root => root.laptopFriendlyWorkspace,
  paidParkingOffPremises: async root => root.paidParkingOffPremises,
  petsAllowed: async root => root.petsAllowed,
  pool: async root => root.pool,
  privateEntrance: async root => root.privateEntrance,
  shampoo: async root => root.shampoo,
  smokingAllowed: async root => root.smokingAllowed,
  suitableForEvents: async root => root.suitableForEvents,
  tv: async root => root.tv,
  washer: async root => root.washer,
  wheelchairAccessible: async root => root.wheelchairAccessible,
  wirelessInternet: async root => root.wirelessInternet,
}

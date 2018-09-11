import { IAmenities } from '../generated/resolvers'
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
  airConditioning: root => root.airConditioning,
  babyBath: root => root.babyBath,
  babyMonitor: root => root.babyMonitor,
  babysitterRecommendations: root => root.babysitterRecommendations,
  bathtub: root => root.bathtub,
  breakfast: root => root.breakfast,
  buzzerWirelessIntercom: root => root.buzzerWirelessIntercom,
  cableTv: root => root.cableTv,
  changingTable: root => root.changingTable,
  childrensBooksAndToys: root => root.childrensBooksAndToys,
  childrensDinnerware: root => root.childrensDinnerware,
  crib: root => root.crib,
  doorman: root => root.doorman,
  dryer: root => root.dryer,
  elevator: root => root.elevator,
  essentials: root => root.essentials,
  familyKidFriendly: root => root.familyKidFriendly,
  freeParkingOnPremises: root => root.freeParkingOnPremises,
  freeParkingOnStreet: root => root.freeParkingOnStreet,
  gym: root => root.gym,
  hairDryer: root => root.hairDryer,
  hangers: root => root.hangers,
  heating: root => root.heating,
  hotTub: root => root.hotTub,
  id: root => root.id,
  indoorFireplace: root => root.indoorFireplace,
  internet: root => root.internet,
  iron: root => root.iron,
  kitchen: root => root.kitchen,
  laptopFriendlyWorkspace: root => root.laptopFriendlyWorkspace,
  paidParkingOffPremises: root => root.paidParkingOffPremises,
  petsAllowed: root => root.petsAllowed,
  pool: root => root.pool,
  privateEntrance: root => root.privateEntrance,
  shampoo: root => root.shampoo,
  smokingAllowed: root => root.smokingAllowed,
  suitableForEvents: root => root.suitableForEvents,
  tv: root => root.tv,
  washer: root => root.washer,
  wheelchairAccessible: root => root.wheelchairAccessible,
  wirelessInternet: root => root.wirelessInternet,
}

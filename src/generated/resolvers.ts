import { GraphQLResolveInfo } from 'graphql'

export interface ITypeMap {
  Context: any
  PAYMENT_PROVIDER: any
  PLACE_SIZES: any
  NOTIFICATION_TYPE: any
  CURRENCY: any
  MutationType: any

  QueryParent: any
  MutationParent: any
  SubscriptionParent: any
  ViewerParent: any
  AuthPayloadParent: any
  MutationResultParent: any
  ExperiencesByCityParent: any
  ReservationParent: any
  ExperienceParent: any
  ReviewParent: any
  NeighbourhoodParent: any
  LocationParent: any
  PictureParent: any
  CityParent: any
  ExperienceCategoryParent: any
  UserParent: any
  PaymentAccountParent: any
  PlaceParent: any
  BookingParent: any
  NotificationParent: any
  PaymentParent: any
  PaypalInformationParent: any
  CreditCardInformationParent: any
  MessageParent: any
  PricingParent: any
  PlaceViewsParent: any
  GuestRequirementsParent: any
  PoliciesParent: any
  HouseRulesParent: any
  AmenitiesParent: any
  CitySubscriptionPayloadParent: any
  CityPreviousValuesParent: any
}

export interface LocationCreateInput {
  lat: number
  lng: number
  address: string
  directions: string
  neighbourHood: string
  user: string
  place: string
  experience: string
  restaurant: string
}
export interface NeighbourhoodCreateOneWithoutLocationsInput {
  create: string
  connect: string
}
export interface UserCreateOneWithoutLocationInput {
  create: string
  connect: string
}
export interface PlaceCreateOneWithoutLocationInput {
  create: string
  connect: string
}
export interface ExperienceCreateOneWithoutLocationInput {
  create: string
  connect: string
}
export interface RestaurantCreateOneWithoutLocationInput {
  create: string
  connect: string
}
export interface NeighbourhoodCreateWithoutLocationsInput {
  name: string
  slug: string
  featured: boolean
  popularity: number
  homePreview: string
  city: string
}
export interface NeighbourhoodWhereUniqueInput {
  id: string
}
export interface UserCreateWithoutLocationInput {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  responseRate: number
  responseTime: number
  isSuperHost: boolean
  ownedPlaces: string
  bookings: string
  paymentAccount: string
  sentMessages: string
  receivedMessages: string
  notifications: string
  profilePicture: string
  hostingExperiences: string
}
export interface UserWhereUniqueInput {
  id: string
  email: string
}
export interface PlaceCreateWithoutLocationInput {
  name: string
  size: string
  shortDescription: string
  description: string
  slug: string
  maxGuests: number
  numBedrooms: number
  numBeds: number
  numBaths: number
  popularity: number
  reviews: string
  amenities: string
  host: string
  pricing: string
  views: string
  guestRequirements: string
  policies: string
  houseRules: string
  bookings: string
  pictures: string
}
export interface PlaceWhereUniqueInput {
  id: string
}
export interface ExperienceCreateWithoutLocationInput {
  title: string
  pricePerPerson: number
  popularity: number
  category: string
  host: string
  reviews: string
  preview: string
}
export interface ExperienceWhereUniqueInput {
  id: string
}
export interface RestaurantCreateWithoutLocationInput {
  title: string
  avgPricePerPerson: number
  isCurated: boolean
  slug: string
  popularity: number
  pictures: string
}
export interface RestaurantWhereUniqueInput {
  id: string
}
export interface PictureCreateOneInput {
  create: string
  connect: string
}
export interface CityCreateOneWithoutNeighbourhoodsInput {
  create: string
  connect: string
}
export interface PlaceCreateManyWithoutHostInput {
  create: string
  connect: string
}
export interface BookingCreateManyWithoutBookeeInput {
  create: string
  connect: string
}
export interface PaymentAccountCreateManyWithoutUserInput {
  create: string
  connect: string
}
export interface MessageCreateManyWithoutFromInput {
  create: string
  connect: string
}
export interface MessageCreateManyWithoutToInput {
  create: string
  connect: string
}
export interface NotificationCreateManyWithoutUserInput {
  create: string
  connect: string
}
export interface ExperienceCreateManyWithoutHostInput {
  create: string
  connect: string
}
export interface ReviewCreateManyWithoutPlaceInput {
  create: string
  connect: string
}
export interface AmenitiesCreateOneWithoutPlaceInput {
  create: string
  connect: string
}
export interface UserCreateOneWithoutOwnedPlacesInput {
  create: string
  connect: string
}
export interface PricingCreateOneWithoutPlaceInput {
  create: string
  connect: string
}
export interface ViewsCreateOneWithoutPlaceInput {
  create: string
  connect: string
}
export interface GuestRequirementsCreateOneWithoutPlaceInput {
  create: string
  connect: string
}
export interface PoliciesCreateOneWithoutPlaceInput {
  create: string
  connect: string
}
export interface HouseRulesCreateOneInput {
  create: string
  connect: string
}
export interface BookingCreateManyWithoutPlaceInput {
  create: string
  connect: string
}
export interface PictureCreateManyInput {
  create: string
  connect: string
}
export interface ExperienceCategoryCreateOneWithoutExperienceInput {
  create: string
  connect: string
}
export interface UserCreateOneWithoutHostingExperiencesInput {
  create: string
  connect: string
}
export interface ReviewCreateManyWithoutExperienceInput {
  create: string
  connect: string
}
export interface PictureCreateInput {
  url: string
}
export interface PictureWhereUniqueInput {
  id: string
}
export interface CityCreateWithoutNeighbourhoodsInput {
  name: string
}
export interface CityWhereUniqueInput {
  id: string
}
export interface PlaceCreateWithoutHostInput {
  name: string
  size: string
  shortDescription: string
  description: string
  slug: string
  maxGuests: number
  numBedrooms: number
  numBeds: number
  numBaths: number
  popularity: number
  reviews: string
  amenities: string
  pricing: string
  location: string
  views: string
  guestRequirements: string
  policies: string
  houseRules: string
  bookings: string
  pictures: string
}
export interface BookingCreateWithoutBookeeInput {
  startDate: string
  endDate: string
  place: string
  payment: string
}
export interface BookingWhereUniqueInput {
  id: string
}
export interface PaymentAccountCreateWithoutUserInput {
  type: string
  payments: string
  paypal: string
  creditcard: string
}
export interface PaymentAccountWhereUniqueInput {
  id: string
}
export interface MessageCreateWithoutFromInput {
  deliveredAt: string
  readAt: string
  to: string
}
export interface MessageWhereUniqueInput {
  id: string
}
export interface MessageCreateWithoutToInput {
  deliveredAt: string
  readAt: string
  from: string
}
export interface NotificationCreateWithoutUserInput {
  type: string
  link: string
  readDate: string
}
export interface NotificationWhereUniqueInput {
  id: string
}
export interface ExperienceCreateWithoutHostInput {
  title: string
  pricePerPerson: number
  popularity: number
  category: string
  location: string
  reviews: string
  preview: string
}
export interface ReviewCreateWithoutPlaceInput {
  text: string
  stars: number
  accuracy: number
  location: number
  checkIn: number
  value: number
  cleanliness: number
  communication: number
  experience: string
}
export interface ReviewWhereUniqueInput {
  id: string
}
export interface AmenitiesCreateWithoutPlaceInput {
  elevator: boolean
  petsAllowed: boolean
  internet: boolean
  kitchen: boolean
  wirelessInternet: boolean
  familyKidFriendly: boolean
  freeParkingOnPremises: boolean
  hotTub: boolean
  pool: boolean
  smokingAllowed: boolean
  wheelchairAccessible: boolean
  breakfast: boolean
  cableTv: boolean
  suitableForEvents: boolean
  dryer: boolean
  washer: boolean
  indoorFireplace: boolean
  tv: boolean
  heating: boolean
  hangers: boolean
  iron: boolean
  hairDryer: boolean
  doorman: boolean
  paidParkingOffPremises: boolean
  freeParkingOnStreet: boolean
  gym: boolean
  airConditioning: boolean
  shampoo: boolean
  essentials: boolean
  laptopFriendlyWorkspace: boolean
  privateEntrance: boolean
  buzzerWirelessIntercom: boolean
  babyBath: boolean
  babyMonitor: boolean
  babysitterRecommendations: boolean
  bathtub: boolean
  changingTable: boolean
  childrensBooksAndToys: boolean
  childrensDinnerware: boolean
  crib: boolean
}
export interface AmenitiesWhereUniqueInput {
  id: string
}
export interface UserCreateWithoutOwnedPlacesInput {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  responseRate: number
  responseTime: number
  isSuperHost: boolean
  location: string
  bookings: string
  paymentAccount: string
  sentMessages: string
  receivedMessages: string
  notifications: string
  profilePicture: string
  hostingExperiences: string
}
export interface PricingCreateWithoutPlaceInput {
  monthlyDiscount: number
  weeklyDiscount: number
  perNight: number
  smartPricing: boolean
  basePrice: number
  averageWeekly: number
  averageMonthly: number
  cleaningFee: number
  securityDeposit: number
  extraGuests: number
  weekendPricing: number
  currency: string
}
export interface PricingWhereUniqueInput {
  id: string
}
export interface ViewsCreateWithoutPlaceInput {
  lastWeek: number
}
export interface ViewsWhereUniqueInput {
  id: string
}
export interface GuestRequirementsCreateWithoutPlaceInput {
  govIssuedId: boolean
  recommendationsFromOtherHosts: boolean
  guestTripInformation: boolean
}
export interface GuestRequirementsWhereUniqueInput {
  id: string
}
export interface PoliciesCreateWithoutPlaceInput {
  checkInStartTime: number
  checkInEndTime: number
  checkoutTime: number
}
export interface PoliciesWhereUniqueInput {
  id: string
}
export interface HouseRulesCreateInput {
  suitableForChildren: boolean
  suitableForInfants: boolean
  petsAllowed: boolean
  smokingAllowed: boolean
  partiesAndEventsAllowed: boolean
  additionalRules: string
}
export interface HouseRulesWhereUniqueInput {
  id: string
}
export interface BookingCreateWithoutPlaceInput {
  startDate: string
  endDate: string
  bookee: string
  payment: string
}
export interface ExperienceCategoryCreateWithoutExperienceInput {
  mainColor: string
  name: string
}
export interface ExperienceCategoryWhereUniqueInput {
  id: string
}
export interface UserCreateWithoutHostingExperiencesInput {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  responseRate: number
  responseTime: number
  isSuperHost: boolean
  ownedPlaces: string
  location: string
  bookings: string
  paymentAccount: string
  sentMessages: string
  receivedMessages: string
  notifications: string
  profilePicture: string
}
export interface ReviewCreateWithoutExperienceInput {
  text: string
  stars: number
  accuracy: number
  location: number
  checkIn: number
  value: number
  cleanliness: number
  communication: number
  place: string
}
export interface LocationCreateOneWithoutPlaceInput {
  create: string
  connect: string
}
export interface PlaceCreateOneWithoutBookingsInput {
  create: string
  connect: string
}
export interface PaymentCreateOneWithoutBookingInput {
  create: string
  connect: string
}
export interface PaymentCreateManyWithoutPaymentMethodInput {
  create: string
  connect: string
}
export interface PaypalInformationCreateOneWithoutPaymentAccountInput {
  create: string
  connect: string
}
export interface CreditCardInformationCreateOneWithoutPaymentAccountInput {
  create: string
  connect: string
}
export interface UserCreateOneWithoutReceivedMessagesInput {
  create: string
  connect: string
}
export interface UserCreateOneWithoutSentMessagesInput {
  create: string
  connect: string
}
export interface LocationCreateOneWithoutExperienceInput {
  create: string
  connect: string
}
export interface ExperienceCreateOneWithoutReviewsInput {
  create: string
  connect: string
}
export interface LocationCreateOneWithoutUserInput {
  create: string
  connect: string
}
export interface UserCreateOneWithoutBookingsInput {
  create: string
  connect: string
}
export interface PlaceCreateOneWithoutReviewsInput {
  create: string
  connect: string
}
export interface LocationCreateWithoutPlaceInput {
  lat: number
  lng: number
  address: string
  directions: string
  neighbourHood: string
  user: string
  experience: string
  restaurant: string
}
export interface LocationWhereUniqueInput {
  id: string
}
export interface PlaceCreateWithoutBookingsInput {
  name: string
  size: string
  shortDescription: string
  description: string
  slug: string
  maxGuests: number
  numBedrooms: number
  numBeds: number
  numBaths: number
  popularity: number
  reviews: string
  amenities: string
  host: string
  pricing: string
  location: string
  views: string
  guestRequirements: string
  policies: string
  houseRules: string
  pictures: string
}
export interface PaymentCreateWithoutBookingInput {
  serviceFee: number
  placePrice: number
  totalPrice: number
  paymentMethod: string
}
export interface PaymentWhereUniqueInput {
  id: string
}
export interface PaymentCreateWithoutPaymentMethodInput {
  serviceFee: number
  placePrice: number
  totalPrice: number
  booking: string
}
export interface PaypalInformationCreateWithoutPaymentAccountInput {
  email: string
}
export interface PaypalInformationWhereUniqueInput {
  id: string
}
export interface CreditCardInformationCreateWithoutPaymentAccountInput {
  cardNumber: string
  expiresOnMonth: number
  expiresOnYear: number
  securityCode: string
  firstName: string
  lastName: string
  postalCode: string
  country: string
}
export interface CreditCardInformationWhereUniqueInput {
  id: string
}
export interface UserCreateWithoutReceivedMessagesInput {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  responseRate: number
  responseTime: number
  isSuperHost: boolean
  ownedPlaces: string
  location: string
  bookings: string
  paymentAccount: string
  sentMessages: string
  notifications: string
  profilePicture: string
  hostingExperiences: string
}
export interface UserCreateWithoutSentMessagesInput {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  responseRate: number
  responseTime: number
  isSuperHost: boolean
  ownedPlaces: string
  location: string
  bookings: string
  paymentAccount: string
  receivedMessages: string
  notifications: string
  profilePicture: string
  hostingExperiences: string
}
export interface LocationCreateWithoutExperienceInput {
  lat: number
  lng: number
  address: string
  directions: string
  neighbourHood: string
  user: string
  place: string
  restaurant: string
}
export interface ExperienceCreateWithoutReviewsInput {
  title: string
  pricePerPerson: number
  popularity: number
  category: string
  host: string
  location: string
  preview: string
}
export interface LocationCreateWithoutUserInput {
  lat: number
  lng: number
  address: string
  directions: string
  neighbourHood: string
  place: string
  experience: string
  restaurant: string
}
export interface UserCreateWithoutBookingsInput {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  responseRate: number
  responseTime: number
  isSuperHost: boolean
  ownedPlaces: string
  location: string
  paymentAccount: string
  sentMessages: string
  receivedMessages: string
  notifications: string
  profilePicture: string
  hostingExperiences: string
}
export interface PlaceCreateWithoutReviewsInput {
  name: string
  size: string
  shortDescription: string
  description: string
  slug: string
  maxGuests: number
  numBedrooms: number
  numBeds: number
  numBaths: number
  popularity: number
  amenities: string
  host: string
  pricing: string
  location: string
  views: string
  guestRequirements: string
  policies: string
  houseRules: string
  bookings: string
  pictures: string
}
export interface PaymentAccountCreateOneWithoutPaymentsInput {
  create: string
  connect: string
}
export interface BookingCreateOneWithoutPaymentInput {
  create: string
  connect: string
}
export interface PaymentAccountCreateWithoutPaymentsInput {
  type: string
  user: string
  paypal: string
  creditcard: string
}
export interface BookingCreateWithoutPaymentInput {
  startDate: string
  endDate: string
  bookee: string
  place: string
}
export interface UserCreateOneWithoutPaymentAccountInput {
  create: string
  connect: string
}
export interface UserCreateWithoutPaymentAccountInput {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  responseRate: number
  responseTime: number
  isSuperHost: boolean
  ownedPlaces: string
  location: string
  bookings: string
  sentMessages: string
  receivedMessages: string
  notifications: string
  profilePicture: string
  hostingExperiences: string
}

export namespace QueryResolvers {
  export type TopExperiencesType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>

  export type TopHomesType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>

  export interface ArgsHomesInPriceRange {
    min: number
    max: number
  }

  export type HomesInPriceRangeType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsHomesInPriceRange,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>

  export type TopReservationsType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReservationParent'][] | Promise<T['ReservationParent'][]>

  export type FeaturedDestinationsType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NeighbourhoodParent'][] | Promise<T['NeighbourhoodParent'][]>

  export interface ArgsExperiencesByCity {
    cities: string[]
  }

  export type ExperiencesByCityType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsExperiencesByCity,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperiencesByCityParent'][] | Promise<T['ExperiencesByCityParent'][]>

  export type ViewerType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ViewerParent'] | null | Promise<T['ViewerParent'] | null>

  export type MyLocationType<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>

  export interface Type<T extends ITypeMap> {
    topExperiences: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>
    topHomes: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>
    homesInPriceRange: (
      parent: T['QueryParent'],
      args: ArgsHomesInPriceRange,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>
    topReservations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReservationParent'][] | Promise<T['ReservationParent'][]>
    featuredDestinations: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NeighbourhoodParent'][] | Promise<T['NeighbourhoodParent'][]>
    experiencesByCity: (
      parent: T['QueryParent'],
      args: ArgsExperiencesByCity,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['ExperiencesByCityParent'][]
      | Promise<T['ExperiencesByCityParent'][]>
    viewer: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ViewerParent'] | null | Promise<T['ViewerParent'] | null>
    myLocation: (
      parent: T['QueryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>
  }
}

export namespace MutationResolvers {
  export interface ArgsSignup {
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string
  }

  export type SignupType<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsSignup,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>

  export interface ArgsLogin {
    email: string
    password: string
  }

  export type LoginType<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsLogin,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>

  export interface ArgsAddPaymentMethod {
    cardNumber: string
    expiresOnMonth: number
    expiresOnYear: number
    securityCode: string
    firstName: string
    lastName: string
    postalCode: string
    country: string
  }

  export type AddPaymentMethodType<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsAddPaymentMethod,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>

  export interface ArgsBook {
    placeId: string
    checkIn: string
    checkOut: string
    numGuests: number
  }

  export type BookType<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsBook,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>

  export interface ArgsAddLocationToUser {
    location: LocationCreateInput | null
  }

  export type AddLocationToUserType<T extends ITypeMap> = (
    parent: T['MutationParent'],
    args: ArgsAddLocationToUser,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['MutationResultParent']
    | null
    | Promise<T['MutationResultParent'] | null>

  export interface Type<T extends ITypeMap> {
    signup: (
      parent: T['MutationParent'],
      args: ArgsSignup,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>
    login: (
      parent: T['MutationParent'],
      args: ArgsLogin,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AuthPayloadParent'] | Promise<T['AuthPayloadParent']>
    addPaymentMethod: (
      parent: T['MutationParent'],
      args: ArgsAddPaymentMethod,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>
    book: (
      parent: T['MutationParent'],
      args: ArgsBook,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationResultParent'] | Promise<T['MutationResultParent']>
    addLocationToUser: (
      parent: T['MutationParent'],
      args: ArgsAddLocationToUser,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['MutationResultParent']
      | null
      | Promise<T['MutationResultParent'] | null>
  }
}

export namespace SubscriptionResolvers {
  export type CityType<T extends ITypeMap> = (
    parent: T['SubscriptionParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['CitySubscriptionPayloadParent']
    | null
    | Promise<T['CitySubscriptionPayloadParent'] | null>

  export interface Type<T extends ITypeMap> {
    city: (
      parent: T['SubscriptionParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['CitySubscriptionPayloadParent']
      | null
      | Promise<T['CitySubscriptionPayloadParent'] | null>
  }
}

export namespace ViewerResolvers {
  export type MeType<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type BookingsType<T extends ITypeMap> = (
    parent: T['ViewerParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][] | Promise<T['BookingParent'][]>

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    bookings: (
      parent: T['ViewerParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][] | Promise<T['BookingParent'][]>
  }
}

export namespace AuthPayloadResolvers {
  export type TokenType<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UserType<T extends ITypeMap> = (
    parent: T['AuthPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    user: (
      parent: T['AuthPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
  }
}

export namespace MutationResultResolvers {
  export type SuccessType<T extends ITypeMap> = (
    parent: T['MutationResultParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type<T extends ITypeMap> {
    success: (
      parent: T['MutationResultParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export namespace ExperiencesByCityResolvers {
  export type ExperiencesType<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>

  export type CityType<T extends ITypeMap> = (
    parent: T['ExperiencesByCityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent'] | Promise<T['CityParent']>

  export interface Type<T extends ITypeMap> {
    experiences: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>
    city: (
      parent: T['ExperiencesByCityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent'] | Promise<T['CityParent']>
  }
}

export namespace ReservationResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TitleType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type AvgPricePerPersonType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type PicturesType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>

  export type LocationType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | Promise<T['LocationParent']>

  export type IsCuratedType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type SlugType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PopularityType<T extends ITypeMap> = (
    parent: T['ReservationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    title: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    avgPricePerPerson: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    pictures: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>
    location: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | Promise<T['LocationParent']>
    isCurated: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    slug: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    popularity: (
      parent: T['ReservationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace ExperienceResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CategoryType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['ExperienceCategoryParent']
    | null
    | Promise<T['ExperienceCategoryParent'] | null>

  export type TitleType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LocationType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | Promise<T['LocationParent']>

  export type PricePerPersonType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type ReviewsType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>

  export type PreviewType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | Promise<T['PictureParent']>

  export type PopularityType<T extends ITypeMap> = (
    parent: T['ExperienceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    category: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['ExperienceCategoryParent']
      | null
      | Promise<T['ExperienceCategoryParent'] | null>
    title: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    location: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | Promise<T['LocationParent']>
    pricePerPerson: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    reviews: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>
    preview: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | Promise<T['PictureParent']>
    popularity: (
      parent: T['ExperienceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace ReviewResolvers {
  export type AccuracyType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CheckInType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CleanlinessType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CommunicationType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LocationType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type StarsType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type TextType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ValueType<T extends ITypeMap> = (
    parent: T['ReviewParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    accuracy: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    checkIn: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    cleanliness: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    communication: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    createdAt: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    location: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    stars: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    text: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    value: (
      parent: T['ReviewParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace NeighbourhoodResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameType<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type SlugType<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type HomePreviewType<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>

  export type CityType<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent'] | Promise<T['CityParent']>

  export type FeaturedType<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PopularityType<T extends ITypeMap> = (
    parent: T['NeighbourhoodParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    slug: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    homePreview: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>
    city: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent'] | Promise<T['CityParent']>
    featured: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    popularity: (
      parent: T['NeighbourhoodParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace LocationResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LatType<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type LngType<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type AddressType<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type DirectionsType<T extends ITypeMap> = (
    parent: T['LocationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    lat: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    lng: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    address: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
    directions: (
      parent: T['LocationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
  }
}

export namespace PictureResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UrlType<T extends ITypeMap> = (
    parent: T['PictureParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    url: (
      parent: T['PictureParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace CityResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameType<T extends ITypeMap> = (
    parent: T['CityParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['CityParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace ExperienceCategoryResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type MainColorType<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameType<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ExperienceType<T extends ITypeMap> = (
    parent: T['ExperienceCategoryParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'] | null | Promise<T['ExperienceParent'] | null>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    mainColor: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    experience: (
      parent: T['ExperienceCategoryParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'] | null | Promise<T['ExperienceParent'] | null>
  }
}

export namespace UserResolvers {
  export type BookingsType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][] | Promise<T['BookingParent'][]>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EmailType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type FirstNameType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type HostingExperiencesType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>

  export type IdType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IsSuperHostType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type LastNameType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LocationType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>

  export type NotificationsType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NotificationParent'][] | Promise<T['NotificationParent'][]>

  export type OwnedPlacesType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>

  export type PaymentAccountType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['PaymentAccountParent'][]
    | null
    | Promise<T['PaymentAccountParent'][] | null>

  export type PhoneType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ProfilePictureType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>

  export type ReceivedMessagesType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MessageParent'][] | Promise<T['MessageParent'][]>

  export type ResponseRateType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type ResponseTimeType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type SentMessagesType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MessageParent'][] | Promise<T['MessageParent'][]>

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T['UserParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    bookings: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][] | Promise<T['BookingParent'][]>
    createdAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    email: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    firstName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    hostingExperiences: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ExperienceParent'][] | Promise<T['ExperienceParent'][]>
    id: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    isSuperHost: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    lastName: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    location: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | null | Promise<T['LocationParent'] | null>
    notifications: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NotificationParent'][] | Promise<T['NotificationParent'][]>
    ownedPlaces: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent'][] | Promise<T['PlaceParent'][]>
    paymentAccount: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['PaymentAccountParent'][]
      | null
      | Promise<T['PaymentAccountParent'][] | null>
    phone: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    profilePicture: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'] | null | Promise<T['PictureParent'] | null>
    receivedMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MessageParent'][] | Promise<T['MessageParent'][]>
    responseRate: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    responseTime: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    sentMessages: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MessageParent'][] | Promise<T['MessageParent'][]>
    updatedAt: (
      parent: T['UserParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace PaymentAccountResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TypeType<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PAYMENT_PROVIDER'] | null | Promise<T['PAYMENT_PROVIDER'] | null>

  export type UserType<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type PaymentsType<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentParent'][] | Promise<T['PaymentParent'][]>

  export type PaypalType<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['PaypalInformationParent']
    | null
    | Promise<T['PaypalInformationParent'] | null>

  export type CreditcardType<T extends ITypeMap> = (
    parent: T['PaymentAccountParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['CreditCardInformationParent']
    | null
    | Promise<T['CreditCardInformationParent'] | null>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    createdAt: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    type: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PAYMENT_PROVIDER'] | null | Promise<T['PAYMENT_PROVIDER'] | null>
    user: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    payments: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentParent'][] | Promise<T['PaymentParent'][]>
    paypal: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['PaypalInformationParent']
      | null
      | Promise<T['PaypalInformationParent'] | null>
    creditcard: (
      parent: T['PaymentAccountParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['CreditCardInformationParent']
      | null
      | Promise<T['CreditCardInformationParent'] | null>
  }
}

export namespace PlaceResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type SizeType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PLACE_SIZES'] | null | Promise<T['PLACE_SIZES'] | null>

  export type ShortDescriptionType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type DescriptionType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type SlugType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type MaxGuestsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NumRatingsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type AvgRatingType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type NumBedroomsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NumBedsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NumBathsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type ReviewsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>

  export type AmenitiesType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['AmenitiesParent'] | Promise<T['AmenitiesParent']>

  export type HostType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type PricingType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PricingParent'] | Promise<T['PricingParent']>

  export type LocationType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['LocationParent'] | Promise<T['LocationParent']>

  export type ViewsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceViewsParent'] | Promise<T['PlaceViewsParent']>

  export type GuestRequirementsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['GuestRequirementsParent']
    | null
    | Promise<T['GuestRequirementsParent'] | null>

  export type PoliciesType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PoliciesParent'] | null | Promise<T['PoliciesParent'] | null>

  export type HouseRulesType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['HouseRulesParent'] | null | Promise<T['HouseRulesParent'] | null>

  export type BookingsType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'][] | Promise<T['BookingParent'][]>

  export type PicturesType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PictureParent'][] | Promise<T['PictureParent'][]>

  export type PopularityType<T extends ITypeMap> = (
    parent: T['PlaceParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
    size: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PLACE_SIZES'] | null | Promise<T['PLACE_SIZES'] | null>
    shortDescription: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    description: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    slug: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    maxGuests: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    numRatings: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    avgRating: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    numBedrooms: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    numBeds: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    numBaths: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    reviews: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ReviewParent'][] | Promise<T['ReviewParent'][]>
    amenities: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['AmenitiesParent'] | Promise<T['AmenitiesParent']>
    host: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    pricing: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PricingParent'] | Promise<T['PricingParent']>
    location: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['LocationParent'] | Promise<T['LocationParent']>
    views: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceViewsParent'] | Promise<T['PlaceViewsParent']>
    guestRequirements: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['GuestRequirementsParent']
      | null
      | Promise<T['GuestRequirementsParent'] | null>
    policies: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PoliciesParent'] | null | Promise<T['PoliciesParent'] | null>
    houseRules: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['HouseRulesParent'] | null | Promise<T['HouseRulesParent'] | null>
    bookings: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'][] | Promise<T['BookingParent'][]>
    pictures: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PictureParent'][] | Promise<T['PictureParent'][]>
    popularity: (
      parent: T['PlaceParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace BookingResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type BookeeType<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export type PlaceType<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PlaceParent'] | Promise<T['PlaceParent']>

  export type StartDateType<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EndDateType<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentType<T extends ITypeMap> = (
    parent: T['BookingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentParent'] | Promise<T['PaymentParent']>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    createdAt: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    bookee: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
    place: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PlaceParent'] | Promise<T['PlaceParent']>
    startDate: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    endDate: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    payment: (
      parent: T['BookingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentParent'] | Promise<T['PaymentParent']>
  }
}

export namespace NotificationResolvers {
  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LinkType<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ReadDateType<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type TypeType<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['NOTIFICATION_TYPE'] | null | Promise<T['NOTIFICATION_TYPE'] | null>

  export type UserType<T extends ITypeMap> = (
    parent: T['NotificationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['UserParent'] | Promise<T['UserParent']>

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    link: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    readDate: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    type: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['NOTIFICATION_TYPE'] | null | Promise<T['NOTIFICATION_TYPE'] | null>
    user: (
      parent: T['NotificationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['UserParent'] | Promise<T['UserParent']>
  }
}

export namespace PaymentResolvers {
  export type BookingType<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['BookingParent'] | Promise<T['BookingParent']>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentMethodType<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>

  export type ServiceFeeType<T extends ITypeMap> = (
    parent: T['PaymentParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    booking: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['BookingParent'] | Promise<T['BookingParent']>
    createdAt: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    paymentMethod: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>
    serviceFee: (
      parent: T['PaymentParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace PaypalInformationResolvers {
  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EmailType<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentAccountType<T extends ITypeMap> = (
    parent: T['PaypalInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    email: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    paymentAccount: (
      parent: T['PaypalInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PaymentAccountParent'] | Promise<T['PaymentAccountParent']>
  }
}

export namespace CreditCardInformationResolvers {
  export type CardNumberType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CountryType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ExpiresOnMonthType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type ExpiresOnYearType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type FirstNameType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LastNameType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PaymentAccountType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['PaymentAccountParent']
    | null
    | Promise<T['PaymentAccountParent'] | null>

  export type PostalCodeType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type SecurityCodeType<T extends ITypeMap> = (
    parent: T['CreditCardInformationParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    cardNumber: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    country: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    createdAt: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    expiresOnMonth: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    expiresOnYear: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    firstName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    lastName: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    paymentAccount: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['PaymentAccountParent']
      | null
      | Promise<T['PaymentAccountParent'] | null>
    postalCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    securityCode: (
      parent: T['CreditCardInformationParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace MessageResolvers {
  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type DeliveredAtType<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ReadAtType<T extends ITypeMap> = (
    parent: T['MessageParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    createdAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    deliveredAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    readAt: (
      parent: T['MessageParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace PricingResolvers {
  export type AverageMonthlyType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type AverageWeeklyType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type BasePriceType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CleaningFeeType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type CurrencyType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CURRENCY'] | null | Promise<T['CURRENCY'] | null>

  export type ExtraGuestsType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type IdType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type MonthlyDiscountType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type PerNightType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type SecurityDepositType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type SmartPricingType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WeekendPricingType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export type WeeklyDiscountType<T extends ITypeMap> = (
    parent: T['PricingParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | null | Promise<number | null>

  export interface Type<T extends ITypeMap> {
    averageMonthly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    averageWeekly: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    basePrice: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    cleaningFee: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    currency: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CURRENCY'] | null | Promise<T['CURRENCY'] | null>
    extraGuests: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    id: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    monthlyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    perNight: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    securityDeposit: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    smartPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    weekendPricing: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
    weeklyDiscount: (
      parent: T['PricingParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | null | Promise<number | null>
  }
}

export namespace PlaceViewsResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['PlaceViewsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type LastWeekType<T extends ITypeMap> = (
    parent: T['PlaceViewsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PlaceViewsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    lastWeek: (
      parent: T['PlaceViewsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace GuestRequirementsResolvers {
  export type GovIssuedIdType<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type GuestTripInformationType<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type IdType<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type RecommendationsFromOtherHostsType<T extends ITypeMap> = (
    parent: T['GuestRequirementsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type<T extends ITypeMap> {
    govIssuedId: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    guestTripInformation: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    id: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    recommendationsFromOtherHosts: (
      parent: T['GuestRequirementsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export namespace PoliciesResolvers {
  export type CheckInEndTimeType<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CheckInStartTimeType<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CheckoutTimeType<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T['PoliciesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    checkInEndTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    checkInStartTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    checkoutTime: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    createdAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    updatedAt: (
      parent: T['PoliciesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace HouseRulesResolvers {
  export type AdditionalRulesType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | null | Promise<string | null>

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IdType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PartiesAndEventsAllowedType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type PetsAllowedType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type SmokingAllowedType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type SuitableForChildrenType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type SuitableForInfantsType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | null | Promise<boolean | null>

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T['HouseRulesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    additionalRules: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | null | Promise<string | null>
    createdAt: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    id: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    partiesAndEventsAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    petsAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    smokingAllowed: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    suitableForChildren: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    suitableForInfants: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | null | Promise<boolean | null>
    updatedAt: (
      parent: T['HouseRulesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace AmenitiesResolvers {
  export type AirConditioningType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BabyBathType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BabyMonitorType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BabysitterRecommendationsType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BathtubType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BreakfastType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type BuzzerWirelessIntercomType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type CableTvType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ChangingTableType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ChildrensBooksAndToysType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ChildrensDinnerwareType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type CribType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type DoormanType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type DryerType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ElevatorType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type EssentialsType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type FamilyKidFriendlyType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type FreeParkingOnPremisesType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type FreeParkingOnStreetType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type GymType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HairDryerType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HangersType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HeatingType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type HotTubType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type IdType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type IndoorFireplaceType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type InternetType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type IronType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type KitchenType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type LaptopFriendlyWorkspaceType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PaidParkingOffPremisesType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PetsAllowedType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PoolType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type PrivateEntranceType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type ShampooType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type SmokingAllowedType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type SuitableForEventsType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type TvType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WasherType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WheelchairAccessibleType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export type WirelessInternetType<T extends ITypeMap> = (
    parent: T['AmenitiesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => boolean | Promise<boolean>

  export interface Type<T extends ITypeMap> {
    airConditioning: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    babyBath: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    babyMonitor: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    babysitterRecommendations: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    bathtub: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    breakfast: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    buzzerWirelessIntercom: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    cableTv: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    changingTable: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    childrensBooksAndToys: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    childrensDinnerware: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    crib: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    doorman: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    dryer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    elevator: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    essentials: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    familyKidFriendly: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    freeParkingOnPremises: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    freeParkingOnStreet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    gym: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    hairDryer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    hangers: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    heating: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    hotTub: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    id: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    indoorFireplace: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    internet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    iron: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    kitchen: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    laptopFriendlyWorkspace: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    paidParkingOffPremises: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    petsAllowed: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    pool: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    privateEntrance: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    shampoo: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    smokingAllowed: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    suitableForEvents: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    tv: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    washer: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    wheelchairAccessible: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
    wirelessInternet: (
      parent: T['AmenitiesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => boolean | Promise<boolean>
  }
}

export namespace CitySubscriptionPayloadResolvers {
  export type MutationType<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MutationType'] | Promise<T['MutationType']>

  export type NodeType<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['CityParent'] | null | Promise<T['CityParent'] | null>

  export type UpdatedFieldsType<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string[] | Promise<string[]>

  export type PreviousValuesType<T extends ITypeMap> = (
    parent: T['CitySubscriptionPayloadParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) =>
    | T['CityPreviousValuesParent']
    | null
    | Promise<T['CityPreviousValuesParent'] | null>

  export interface Type<T extends ITypeMap> {
    mutation: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MutationType'] | Promise<T['MutationType']>
    node: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['CityParent'] | null | Promise<T['CityParent'] | null>
    updatedFields: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string[] | Promise<string[]>
    previousValues: (
      parent: T['CitySubscriptionPayloadParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) =>
      | T['CityPreviousValuesParent']
      | null
      | Promise<T['CityPreviousValuesParent'] | null>
  }
}

export namespace CityPreviousValuesResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameType<T extends ITypeMap> = (
    parent: T['CityPreviousValuesParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['CityPreviousValuesParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>
  Mutation: MutationResolvers.Type<T>
  Subscription: SubscriptionResolvers.Type<T>
  Viewer: ViewerResolvers.Type<T>
  AuthPayload: AuthPayloadResolvers.Type<T>
  MutationResult: MutationResultResolvers.Type<T>
  ExperiencesByCity: ExperiencesByCityResolvers.Type<T>
  Reservation: ReservationResolvers.Type<T>
  Experience: ExperienceResolvers.Type<T>
  Review: ReviewResolvers.Type<T>
  Neighbourhood: NeighbourhoodResolvers.Type<T>
  Location: LocationResolvers.Type<T>
  Picture: PictureResolvers.Type<T>
  City: CityResolvers.Type<T>
  ExperienceCategory: ExperienceCategoryResolvers.Type<T>
  User: UserResolvers.Type<T>
  PaymentAccount: PaymentAccountResolvers.Type<T>
  Place: PlaceResolvers.Type<T>
  Booking: BookingResolvers.Type<T>
  Notification: NotificationResolvers.Type<T>
  Payment: PaymentResolvers.Type<T>
  PaypalInformation: PaypalInformationResolvers.Type<T>
  CreditCardInformation: CreditCardInformationResolvers.Type<T>
  Message: MessageResolvers.Type<T>
  Pricing: PricingResolvers.Type<T>
  PlaceViews: PlaceViewsResolvers.Type<T>
  GuestRequirements: GuestRequirementsResolvers.Type<T>
  Policies: PoliciesResolvers.Type<T>
  HouseRules: HouseRulesResolvers.Type<T>
  Amenities: AmenitiesResolvers.Type<T>
  CitySubscriptionPayload: CitySubscriptionPayloadResolvers.Type<T>
  CityPreviousValues: CityPreviousValuesResolvers.Type<T>
}

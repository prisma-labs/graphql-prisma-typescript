import { Context } from '../utils'
import { ICity } from '../generated/schema'

// TODO
export interface CityRoot {}

export const City: ICity.Resolver<Context, CityRoot> = {}

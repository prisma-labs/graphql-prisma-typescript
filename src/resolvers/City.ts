import { Context } from '../utils'
import { ICity } from '../generated/schema/City'

// TODO
export interface CityRoot {}

export const City: ICity<Context, CityRoot> = {}

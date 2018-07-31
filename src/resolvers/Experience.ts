import { Context } from '../utils'
import { IExperience } from '../generated/schema'

// TODO
export interface ExperienceRoot {}

export const Experience: IExperience.Resolver<Context, ExperienceRoot> = {}

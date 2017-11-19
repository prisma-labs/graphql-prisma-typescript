export const ExperiencesByCity = {
  city: async ({ id }, args, context, info) => {
    return context.remote.delegateQuery( 'City', { id }, context, info)
  },
  experiences: async ({ id }, args, context, info) => {
    return context.remote.delegateQuery(
      'allExperiences',
      { filter: { location: { neighbourHood: { city: { id } } } } },
      context,
      info,
    )
  },
}
export const Home = {
  numRatings: async ({ id }, args, context, info) => {
    const result = await context.remote.request(`
      {
        Place(id: "${id}") {
          _reviewsMeta {
            count
          }
        }
      }`)
    return result.Place._reviewsMeta.count
  }
}
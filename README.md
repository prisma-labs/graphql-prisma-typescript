# GraphQL Airbnb Example

This example illustrates the usage of the GraphQL Gateway pattern with graphql.js and Graphcool.

## Getting Started
### Initializing the Graphcool Service
```
cd database
gc deploy
gc info # put the simple endpoint into the `GRAPHQL_ENDPOINT` env var in .envrc
gc root-token main # put the root token into the `ADMIN_TOKEN` env var in .envrc
```

### Starting the Gateway
```
yarn install
yarn start
# Open http://localhost:4000/
```

### Seeding some data
Look in `seed.graphql` to seed some data.

### Booking flow
Look in `queries/booking.graphql` to see the booking flow.

## License
MIT
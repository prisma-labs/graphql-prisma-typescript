# GraphQL Airbnb Example

This example illustrates the usage of the GraphQL Gateway pattern with graphql.js and Graphcool.

## Getting Started

### Initializing the Graphcool Database Service

```sh
cd database
gc deploy # copy the service id into the `GRAPHCOOL_SERVICE_ID` env var in .envrc
gc root-token main # put the root token into the `GRAPHCOOL_TOKEN` env var in .envrc
```

### Starting the Gateway

```sh
yarn install
yarn start
# Open http://localhost:4000/
```

### Seeding some data
Look in `queries/seed.graphql` to seed some data.

### Booking flow
Look in `queries/booking.graphql` to see the booking flow.

## License
MIT

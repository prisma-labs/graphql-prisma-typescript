# GraphQL Server Example

**Theme**: This is an example app implementing a minimal version of Airbnb.

## Getting Started ([Hosted demo](https://airbnb.now.sh))

```sh
# Deploy Graphcool database services
# ... and copy the service endpoint to the `GRAPHCOOL_ENDPOINT` env var in .env
graphcool deploy

# Install node dependencies
yarn install

# Start development server
yarn start
# Open http://localhost:5000/
```

### Seeding some data

```sh
# Runs seed mutations in queries/seed.graphql
yarn seed
```

### Booking flow
Look in `queries/booking.graphql` to see the booking flow.

## Stack

* [`graphql-yoga`](https://github.com/graphcool/graphql-yoga): GraphQL HTTP & subscription server
* [`graphcool`](https://github.com/graphcool/framework): GraphQL database (uses MySQL under the hood)
* [`graphcool-binding`](https://github.com/graphcool/graphcool-binding): GraphQL database binding
* [`now`](https://zeit.co/now): Server deployment

## License
MIT

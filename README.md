# GraphQL Server Example

**Theme**: This is an example app implementing a minimal version of Airbnb.

## Getting Started ([Hosted demo](https://airbnb.now.sh))

> Requires Docker installed locally

```sh
# Install the beta version of Graphcool 1.0
npm install -g graphcool@beta

# Deploy Graphcool database service
graphcool deploy

# Install node dependencies
yarn install

# Start development server
yarn start
# Open http://localhost:5000/
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

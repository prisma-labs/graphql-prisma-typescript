# GraphQL Server Example

`graphql-server-example` is an example app implementing a minimal version of Airbnb.
To view a hosted version of the project visit [https://airbnb.now.sh](https://airbnb.now.sh)

## Getting Started

> Requires Docker installed locally

```sh
# Clone repository
git clone git@github.com:graphcool/graphql-server-example.git 

# Navigate into project
cd graphql-server-example

# Install dependencies
yarn install

# Deploy Prisma database service
yarn prisma deploy

# Start development server
yarn dev

# Open http://localhost:4000
```

## Next Steps

At this point you should have a functioning version of the project running. Navigate to [http://localhost:4000](http://localhost:4000) to explore the schema.

To explore the source code, start at [`src/index.ts`](./src/index.ts)

### Booking flow
Look in `queries/booking.graphql` to see the booking flow.

## Stack

* [`graphql-yoga`](https://github.com/graphcool/graphql-yoga): GraphQL HTTP & subscription server
* [`prisma`](https://github.com/graphcool/prisma): GraphQL database (uses MySQL under the hood)
* [`prisma-binding`](https://github.com/graphcool/prisma-binding): GraphQL database binding
* [`now`](https://zeit.co/now): Server deployment

## License
MIT

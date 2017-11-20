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

```sh
# Runs seed mutations in queries/seed.graphql
yarn seed
```

### Booking flow
Look in `queries/booking.graphql` to see the booking flow.

## Architecture

```
                          +-----------+    +--------------------------+
                          |           |    |                          |
                          |           +----+  Graphcool (GraphQL DB)  |
+--------------------+    |           |    |                          |
|                    |    |  GraphQL  |    +--------------------------+
|   GraphQL Client   +----+    API    |
|                    |    |  Gateway  |    +--------------------------+
+--------------------+    |           |    |                          |
                          |           +----+     Legacy Rest API      |
                          |           |    |                          |
                          +-----------+    +--------------------------+
```

## Directory structure

* `database`: GraphQL database service definitions (using Graphcool)
* `queries`: Helpful GraphQL queries and mutations to seed data and demo the app
* `schemas`: Generated GraphQL schemas of the database service & gateway
* `src`: Source code of the gateway

## License
MIT

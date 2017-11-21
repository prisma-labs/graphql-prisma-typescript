# GraphQL Gateway Example

This example illustrates the usage of the GraphQL Gateway pattern with graphql.js and Graphcool.

**Theme**: This is an example app implementing a minimal version of Airbnb.

## Getting Started ([Hosted demo](https://airbnb-fhsauzpmzb.now.sh))

### Initializing the Graphcool Database Service

```sh
cd database
gc deploy # copy the service id into the `GRAPHCOOL_SERVICE_ID` env var in .env
gc root-token main # put the root token into the `GRAPHCOOL_TOKEN` env var in .env
```

### Starting the Gateway

```sh
yarn install
yarn dev
# Open http://localhost:4000/
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
* [`graphql-remote`](https://github.com/graphcool/graphql-remote): Schema stitching helper library
* [`graphcool`](https://github.com/graphcool/framework): Graphcool as GraphQL database
* [`now`](https://zeit.co/now): Server deployment

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

## Project structure

### Directories

* `database`: GraphQL database service definitions (using Graphcool)
* `queries`: Helpful GraphQL queries and mutations to seed data and demo the app
* `schemas`: Generated GraphQL schemas of the database service & gateway
* `src`: Source code of the gateway

### Files

* `.env`: Contains env vars (such as `GRAPHCOOL_SERVICE_ID` and `GRAPHCOOL_TOKEN`)
* `.graphqlconfig`: [GraphQL config](https://github.com/graphcool/graphql-config) file used for IDE support and [`graphql-cli`](https://github.com/graphcool/graphql-cli)
* `tsconfig.json`: Typescript compiler settings

## License
MIT

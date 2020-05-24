# Airbnb Clone - GraphQL Server Example with Prisma

This project demonstrates how to build a production-ready application with Prisma and [`graphql-yoga`](https://github.com/graphcool/graphql-yoga). The API provided by the GraphQL server is the foundation for an application similar to [AirBnB](https://www.airbnb.com/).

## Get started

> **Note**: `prisma` is listed as a _development dependency_ and _script_ in this project's [`package.json`](./package.json). This means you can invoke the Prisma CLI without having it globally installed on your machine (by prefixing it with `yarn`), e.g. `yarn prisma deploy` or `yarn prisma playground`. If you have the Prisma CLI installed globally (which you can do with `npm install -g prisma`), you can omit the `yarn` prefix.

### 1. Download the example & install dependencies

Clone the repository with the following command:

```sh
git clone git@github.com:graphcool/graphql-server-example.git
```

Next, navigate into the downloaded folder and install the NPM dependencies:

```sh
cd graphql-server-example
yarn install
```

### 2. Deploy the Prisma database service

You can now [deploy](https://www.prismagraphql.com/docs/reference/cli-command-reference/database-service/prisma-deploy-kee1iedaov) the Prisma service (note that this requires you to have [Docker](https://www.docker.com) installed on your machine - if that's not the case, follow the collapsed instructions below the code block):

```sh
cd prisma
docker-compose up -d
cd ..
yarn prisma deploy
```

<details>
 <summary><strong>I don't have <a href="https://www.docker.com">Docker</a> installed on my machine</strong></summary>

To deploy your service to a public cluster (rather than locally with Docker), you need to perform the following steps:

1. Remove the `cluster` property from `prisma.yml`.
1. Run `yarn prisma deploy`.
1. When prompted by the CLI, select a public cluster (e.g. `prisma-eu1` or `prisma-us1`).
1. Replace the [`endpoint`](./src/index.js#L23) in `index.ts` with the HTTP endpoint that was printed after the previous command.

</details>
<br>

> Notice that when deploying the Prisma service for the very first time, the CLI will execute the mutations from [`prisma/seed.graphql`](prisma/seed.graphql) to seed some initial data in the database. The CLI is aware of this file because it's listed in [`prisma/prisma.yml`](prisma/prisma.yml#L11) under the `seed` property.

### 3. Start the GraphQL server

The Prisma database service that's backing your GraphQL server is now available. This means you can now start the server:

```sh
yarn dev
```

The `dev` script starts the server (on `http://localhost:4000`) and opens a GraphQL Playground where you get acces to the API of your GraphQL server (defined in the [application schema](./src/schema.graphql)) as well as the underlying Prisma API (defined in the auto-generated [Prisma database schema](./src/generated/prisma.ts)) directly.

Inside the Playground, you can start exploring the available operations by browsing the built-in documentation.

## Testing the API

Check [`queries/booking.graphql`](queries/booking.graphql) and [`queries/queries.graphql`](queries/queries.graphql) to see several example operations you can send to the API. To get an understanding of the booking flows, check the mutations in [`queries/booking.graphql`](queries/booking.graphql).

## Deployment

A quick and easy way to deploy the GraphQL server from this repository is with [Zeit Now](https://zeit.co/now). After you downloaded the [Now Desktop](https://zeit.co/download) app, you can deploy the server with the following command:

```sh
now --dotenv .env.prod
```

**Notice that you need to create the `.env.prod` file yourself before invoking the command.** It should list the same environment variables as [`.env`](.env) but with different values. In particular, you need to make sure that your Prisma service is deployed to a cluster that accessible over the web.

Here is an example for what `.env.prod` might look like:

```
PRISMA_STAGE="prod"
PRISMA_CLUSTER="public-tundrapiper-423/prisma-us1"
PRISMA_ENDPOINT="http://us1.prisma.sh/public-tundrapiper-423/prisma-airbnb-example/dev"
PRISMA_SECRET="mysecret123"
APP_SECRET="appsecret321"
```

To learn more about deploying GraphQL servers with Zeit Now, check out this [tutorial](https://www.prismagraphql.com/docs/tutorials/graphql-server-development/deployment-with-now-ahs1jahkee).

## Troubleshooting

<details>
 <summary>I'm getting the error message <code>[Network error]: FetchError: request to http://localhost:4466/auth-example/dev failed, reason: connect ECONNREFUSED</code> when trying to send a query or mutation</summary>

This is because the endpoint for the Prisma service is hardcoded in [`index.js`](index.js#L23). The service is assumed to be running on the default port for a local cluster: `http://localhost:4466`. Apparently, your local cluster is using a different port.

You now have two options:

1. Figure out the port of your local cluster and adjust it in `index.js`. You can look it up in `~/.prisma/config.yml`.
1. Deploy the service to a public cluster. Expand the `I don't have Docker installed on my machine`-section in step 2 for instructions.

Either way, you need to adjust the `endpoint` that's passed to the `Prisma` constructor in `index.js` so it reflects the actual cluster domain and service endpoint.

</details>

## License

MIT

Nest - Prisma - GraphQl - Sqlite

## Description

Learning backend project.

Using this stack to learn its merits.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Setting up the db

This project uses `sqlite` as db, make sure to have it installed on your machine.
Create an `.env` file at project root and add a `DATABASE_URL` variable.

_example_:

```env
DATABASE_URL="file:./dev.db"
```

## Apply db migrations

```bash
npx prisma migrate dev
```

Will apply migrations present in `prisma/migrations` folder.

## Generate Prisma client

```bash
npx prisma generate
```

To generate a prisma client based on `schema.prisma` file.

## Seed the db

```bash
npx prisma seed
```

To seed the db with some initial value.
Based on `prisma/seed.ts` file.

## Resetting the db

It's possible to return to the original clean version of te db by running

```bash
npx prisma migrate reset
```

More info on all the prisma CLI command [here](https://www.prisma.io/docs/reference/api-reference/command-reference)

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Altering Prisma models

After making changes to prisma models run

```bash
$ npx prisma generate
```

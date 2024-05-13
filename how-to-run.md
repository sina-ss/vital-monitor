## Run Backend Server:

1. install [nodejs](https://nodejs.org/dist/v20.13.1/node-v20.13.1.tar.gz) version 20 or above
2. install npm version 8 or above
3. run `npm i -g pnpm` to install pnpm
4. run `pnpm i`
5. update `.env` file
6. run `npx prisma generate`
7. run `pnpm run start`

## Install Database

1. Go to Postgres site and install Postgresql
2. in cmd run this command:
   1. `pnpm run prisma:seed`

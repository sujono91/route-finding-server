# Angular Finding Route API

Credits to:
- Sequelize in Express: [Waiyaki](https://github.com/waiyaki/postgres-express-node-tutorial)

### Technologies
- body-parser 1.16.0
- cookie-parser 1.4.3
- debug 2.6.0
- dotenv 4.0.0
- express 4.14.1
- morgan 1.7.0
- mysql 2.13.0
- sequelize 3.30.2
- serve-favicon 2.3.2
- sequelize-cli 2.5.1

### How to run in local
- Set Environment Variable `NODE_ENV` to `production` if you want to run in production.

- You can set the database url for all environment (development, test, and production) in `.env` file

- Install NodeJS (LTS Version)

- Install dependencies

```
npm install
```
- Run server

```
npm start
```

### Sequelize CLI
- You can see how to use migration, generate model, etc using Sequelize CLI in [here](https://github.com/sequelize/cli)

### Known Issues
- There's still a known issue for inactivity timeout (`Unhandled rejection SequelizeBaseError: Quit inactivity timeout`).
However, this is the [issue](https://github.com/mysqljs/mysql/issues/1334) of ClearDB (MySQL addons in Heroku) and not affect the HTTP request from client.
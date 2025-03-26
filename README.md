# Sequelize Setup Guide

This guide covers how to set up and use Sequelize CLI with your project. Follow these instructions to initialize Sequelize, configure it, and manage your database.

## Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Initial Setup

1. **Install Sequelize CLI and Sequelize:**

   Install `sequelize-cli`, `sequelize`, and the MySQL2 package using npm:

   ```js
   npm install sequelize sequelize-cli mysql2
```

# Initialize Sequelize:

# Run the following command to create the basic Sequelize directory structure:

```js 

npx sequelize-cli init

```

# This command will create the following directories and files:
config/: Configuration files
migrations/: Migration files
models/: Model files
seeders/: Seeder files


## Configure Sequelize:
.sequelizerc:
 the .sequelizerc file with the following content:

```js

const path = require('path');

module.exports = {
  'config': path.resolve(__dirname, 'config', 'config.js'),
  'migrations-path': path.resolve(__dirname, 'migrations'),
  'seeders-path': path.resolve(__dirname, 'seeders'),
  'models-path': path.resolve(__dirname, 'models')
};

```

# Create config/config.js:


```js

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT || 3306,
    dialect: 'mysql'
  }
};

```

# Environment Variables:
```js
Ensure you have a .env file at the root of your project with the necessary database credentials:

DATABASE_NAME=mysql_test
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_HOST=localhost
DATABASE_PORT=3306

```


# Create and Migrate the Database:

Create the Database:
```js
npx sequelize-cli db:create
```

# Run Migrations:
```js
npx sequelize-cli db:migrate
```

# Additional Commands

Create a New Migration:
```js
npx sequelize-cli migration:generate --name migration_name
```

# Create a New Model:
```js
npx sequelize-cli model:generate --name ModelName --attributes attribute1:type,attribute2:type
```

# Create a New Seeder:
```js
npx sequelize-cli seed:generate --name seed_name
```

# Run Seeders:

```js
npx sequelize-cli db:seed:all
```

# Undo the Last Migration:
```js
npx sequelize-cli db:migrate:undo
```

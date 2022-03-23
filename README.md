# mongodb-date-filtering-methods

# About Repository:
This is a basic node-js project that I created to learn how to use mongodb aggregation methods and expression filters to query documents by date.

# Software(s) required:
* Latest stable version of Node Package Manager
* MongoDB Database

# Project Setup:
## NB!
Please make sure you have a running instance of Mongodb.

* Step 1:

Switch to the projects root directory and run `npm install` to install the required packages.

* Step 2:

In the projects root directory create a `.env` file and add the following variables:

`PORT`

`MONGO_URL`

* Step 3:

Run `npm  run dev` to start-up the server and access the end-points on `http://localhost:PORT/api/graphql`.

## NB!

To populate the database run `npm run populate-database`.

# Dependencies:
* CORS
* DOTENV
* EXPRESS
* EXPRESS-GRAPHQL
* GRAPHQL
* MONGOOSE
* MORGAN

# Dev-dependencies:
* nodemon

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const schema = require("./main-graphql-schema");
const { graphqlHTTP } = require("express-graphql");
const app = express();
dotenv.config();

app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  );
app.use(
  "/api/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

module.exports = { app };

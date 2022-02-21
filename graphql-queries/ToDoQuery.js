const { GraphQLList } = require("graphql");
const { findAllToDos } = require("../database-queries/ToDoDBQueries");
const { ToDoModel } = require("../graphql-models/ToDoGQLModel");

const getAllToDos = {
  type: new GraphQLList(ToDoModel),
  resolve(parent, args) {
    return findAllToDos();
  }
};

module.exports = { getAllToDos };

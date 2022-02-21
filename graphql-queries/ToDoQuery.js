const { GraphQLList, GraphQLNonNull, GraphQLInt } = require("graphql");
const { findAllToDos, getToDoByMonth } = require("../database-queries/ToDoDBQueries");
const { ToDoModel } = require("../graphql-models/ToDoGQLModel");

const getAllToDosQuery = {
  type: new GraphQLList(ToDoModel),
  resolve(parent, args) {
    return findAllToDos();
  }
};

const getToDoByMonthQuery = {
  type: ToDoModel,
  args: {
    month: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve(parent, args) {
    return getToDoByMonth(args.month);
  }
};

module.exports = { getAllToDosQuery, getToDoByMonthQuery };

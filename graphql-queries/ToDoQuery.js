const { GraphQLList, GraphQLNonNull, GraphQLInt } = require("graphql");
const { findAllToDos, getToDoByMonth, getToDoDatesByYearAndMonth } = require("../database-queries/ToDoDBQueries");
const { ToDoModel } = require("../graphql-models/ToDoGQLModel");
const { ConsoldatedDatesModel } = require("../graphql-models/ConsolidatedDatesGQLModel");

const getAllToDosQuery = {
  type: new GraphQLList(ToDoModel),
  resolve(parent, args) {
    return findAllToDos();
  }
};

const getToDoByMonthQuery = {
  type: ToDoModel,
  args: {
    month: { type: new GraphQLNonNull(GraphQLInt) },
    year: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve(parent, args) {
    return getToDoByMonth(args.month, args.year);
  }
};

const getAllToDosConsolidatedDatesQuery = {
  type: new GraphQLList(ConsoldatedDatesModel),
  resolve(parent, args) {
    return getToDoDatesByYearAndMonth();
  }
};

module.exports = { getAllToDosQuery, getToDoByMonthQuery, getAllToDosConsolidatedDatesQuery };

const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { createToDoMutation } = require("./graphql-mutations/ToDoMutation");
const { getAllToDosQuery } = require("./graphql-queries/ToDoQuery");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllToDos: getAllToDosQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createToDo: createToDoMutation
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

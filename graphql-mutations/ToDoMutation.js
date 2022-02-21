const { GraphQLString, GraphQLNonNull } = require("graphql");
const { createToDo } = require("../database-queries/ToDoDBQueries");

const ToDoMutation = {
  type: GraphQLString,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return createToDo(args.title, args.description);
  }
};

module.exports = { ToDoMutation };

const { GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");

const ToDoModel = new GraphQLObjectType({
  name: "ToDo",
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: new GraphQLNonNull(GraphQLString)
    },
    date: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});

module.exports = { ToDoModel };

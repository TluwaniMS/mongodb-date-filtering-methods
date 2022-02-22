const { GraphQLNonNull, GraphQLInt, GraphQLObjectType } = require("graphql");

const ConsoldatedDatesModel = new GraphQLObjectType({
  name: "ConsolidatedDates",
  fields: () => ({
    month: { type: new GraphQLNonNull(GraphQLInt) },
    year: { type: new GraphQLNonNull(GraphQLInt) }
  })
});

module.exports = { ConsoldatedDatesModel };

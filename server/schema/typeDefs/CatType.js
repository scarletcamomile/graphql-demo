const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const CatType = new GraphQLObjectType({
  name: 'Cat',
  description: 'Another lovely kitty',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    }
  }
});

module.exports = CatType;
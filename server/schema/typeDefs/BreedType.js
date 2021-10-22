const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');

const BreedType = new GraphQLObjectType({
  name: 'Breed',
  description: 'Breeds of cats',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    vocalness: {
      type: GraphQLString,
    },
    temperament: {
      type: new GraphQLList(GraphQLString),
    },
    colors: {
      type: new GraphQLList(GraphQLString),
    }
  }
});

module.exports = BreedType;
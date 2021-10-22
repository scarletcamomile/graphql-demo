const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

const catsData = require("../mock_data/cats");
const breedsData = require("../mock_data/breeds");

const CatType = require("./typeDefs/CatType");
const BreedType = require("./typeDefs/BreedType");

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query',
  fields: {
    cats: {
      type: GraphQLList(CatType),
      resolve: () => catsData
    },
    cat: {
      type: CatType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (_, { id }) => catsData.find(cat => cat.id == id),
    },
    breeds: {
      type: GraphQLList(BreedType),
      resolve: () => breedsData
    }
  }
});

const rootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is the root mutation',
  fields: {
    addCat: {
      type: CatType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve: (_, { name, description, age }) => {
        const newCat = {id: catsData.length + 1, name: name, description: description, age: age };
        catsData.push(newCat);
        return newCat;
      },
    }
  }
});

module.exports = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });
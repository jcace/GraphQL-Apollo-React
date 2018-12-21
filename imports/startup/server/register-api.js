// You need the file extension for graphQL files
import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import ResolutionsSchema from "../../api/resolutions/resolutions.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import merge from 'lodash/merge';

//hi 2
// query for resolution returns an array of Resolutions
const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

// Scalable - import as many schemas as you want,
// and import them here - append to array
const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = merge({Query: {
  hi() {
    return "Hello world";
  }
}}, ResolutionsResolvers)

console.log(resolvers);

// Build the executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Launches graphiql too - query testing
createApolloServer({ schema });

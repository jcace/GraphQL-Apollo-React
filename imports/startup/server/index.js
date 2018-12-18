import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

console.log("Server Running");

// GraphQL code - schema
// Query is a function inside the schema
const typeDefs = `
type Query {
  hi: String
}
`;

// GraphQL Resolver - Method
// Javascript code
const resolvers = {
  Query: {
    hi() {
      return "Hello World";
    }
  }
};

// Build  the schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Launches graphiql too - query testing
createApolloServer({ schema });

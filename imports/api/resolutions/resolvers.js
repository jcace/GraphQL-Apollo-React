import Resolutions from "./resolutions";

// Many different types of resolvers: queries and others.

// GraphQL Resolver - Method
// Javascript code
// Contain Querys, mutations, etc
export default {
  Query: {
    resolutions(obj, args, {userId}) {
      console.log(userId);
    return Resolutions.find({
      userId
    }).fetch();
    }
  },
  Mutation: {
    createResolution(obj, {name}, {userId}) {
      console.log(name);
      const resolutionId = Resolutions.insert({
        name,
        userId
      });
      return Resolutions.findOne(resolutionId);
    }
  }

};

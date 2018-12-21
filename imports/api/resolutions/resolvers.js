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
    createResolution(obj, {name}, context) {
      console.log(name);
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    }
  }

};

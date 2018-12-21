import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ResolutionForm from "./ResolutionForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { withApollo } from "react-apollo";

const App = ({ loading, resolutions, client }) => {
  // Data.loading - goes true once graphql
  //  has returned data
  if (loading) return null;
  else {
    return (
      <div>
        <button
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          Log Out
        </button>
        <RegisterForm client={client} />
        <LoginForm client={client} />
        <ResolutionForm />
        <ul>
          {resolutions.map(resolution => (
            <li key={resolution.id}>{resolution.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};

// Construct the graphQL Query
const resolutionsQuery = gql`
  query Resolutions {
    hi
    resolutions {
      _id
      name
    }
  }
`;

// Higher order component. 'data' property is now
// available here
export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));

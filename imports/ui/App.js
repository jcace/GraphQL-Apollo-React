import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const App = ({data}) => <h1>{data.hi}</h1>;

// Construct the graphQL Query
const hiQuery = gql`
  {
    hi
  }
`;

// Higher order component. 'data' property is now
// available here
export default graphql(hiQuery)(App);

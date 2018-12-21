import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import ResolutionForm from './ResolutionForm'

const App = ({ data }) => {
  // Data.loading - goes true once graphql 
  //  has returned data
  if (data.loading) return null;
  else {
    return (
      <div>
        <h1>{data.hi}</h1>
        <ResolutionForm refetch={data.refetch} />
        <ul>
          {data.resolutions.map(resolution => (
            <li key={resolution.id}>{resolution.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};

// Construct the graphQL Query
const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`;

// Higher order component. 'data' property is now
// available here
export default graphql(hiQuery)(App);

import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloLink, from } from "apollo-link";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import App from "../../ui/App";

// Create meteor client connection
// Meteor.absoluteUrl grabs the absolute URL based on relative path
const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
});

const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken();
  operation.setContext(() => ({
    headers: {
      "meteor-login-token": token
    }
  }));
  return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache
});

// Wrap the App component in ApolloProvider
// ApolloProvider makes Apollo available to React
const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// For Meteor - similar to ReactDOM.render, except it's meteor.startup
Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById("app"));
});

import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../../ui/App"

// For Meteor - similar to ReactDOM.render, except it's meteor.startup
Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});

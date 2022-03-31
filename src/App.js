import "./App.css";

import React from "react";
import EmailListColumn from "./components/EmailColumn";
import FilterOptions from "./components/FilterOptions";
import EmailBody from "./components/EmailBody";
import Navbar from "./components/Navbar";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { fetchEmailList } from "./actions";
import { connect } from "react-redux";
import { useEffect } from "react";

const App = (props) => {
  //fetching the data as the app component mounts
  useEffect(() => {
    props.fetchEmailList();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="body">
          <div className="filter-column">
            <FilterOptions />
          </div>

          <div className="email-column">
            <Switch>
              <Route exact path="/">
                <Redirect to="/inbox" />
              </Route>
              <Route exact path="/:filter">
                <EmailListColumn />
              </Route>
              <Route exact path="/:filter/:id">
                <EmailBody />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, { fetchEmailList })(App);

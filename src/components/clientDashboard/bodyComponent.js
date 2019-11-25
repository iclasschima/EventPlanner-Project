import React from 'react'
import TopNav from './topnavComponenet'
import Dashboard from './dashboard/dashboardContainer'
import Account from "./account/accountContainer";
import Connect from './connects/connectContainer'
import { Route, Switch } from "react-router-dom";

export default ({action, state}) => {
    return (
      <div id="Body" className={state ? 'body__active' : ''}>
        <TopNav state={state} action={action} />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/account" component={Account} />
          <Route path="/connects" component={Connect} />
        </Switch>
      </div>
    );
}

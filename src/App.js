import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home/homeComponent'
import Login from './components/loginComponoent'
import ErrorPage from './components/errorComponent'
import Signup from './components/signupComponent'
import ClientDashboard from './components/clientDashboard/indexComponent'



export class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={ClientDashboard} />
            <Route path="/account" component={ClientDashboard} />
            <Route path="/connects" component={ClientDashboard} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App

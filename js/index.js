// 1.  The app should have a sidebar that allows you to navigate between the inbox and the spam folder. 
// 2.  Clicking on these should take you to a /inbox or /spam route (we recommend you use a dynamic route like /:mailbox_name). 
// 3.  Each of the /inbox and /spam routes should display a list of emails. 
// 4.  Clicking on an email should take you to a /:mailbox_name/:emailId route, which displays the email contents.

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import EmailListContainer from './components/email-list-container';

const routes = (
  <Router history={hashHistory}>
    <Route path="/emails" component={EmailListContainer} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from '../common/nav/Nav'
import PageNotFound from '../common/pageNotFound/PageNotFound';
import HomePage from '../homePage/HomePage';
import ContactList from '../contactList/ContactList';

function App() {
  return (
    <Router>
      <div className="container-fluid mt-3">
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contacts" component={ContactList} />
          <Route path='contacts/:id' component={ContactList} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
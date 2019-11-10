import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../layout/navBar/NavBar'
import PageNotFound from '../layout/pageNotFound/PageNotFound';
import HomePage from '../pages/home/Home';
import ContactsPage from '../pages/contacts/Contacts';

function App() {
  return (
    <Router>
      <div className="container-fluid mt-3">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route path='contacts/:id' component={ContactsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
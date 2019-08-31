import React from 'react';
import Contacts from '../ContactsComponent/ContactsComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <Contacts />
      </div>
    );
  }
}

export default AppComponent;
import React from 'react';
import ContactList from '../contactList/ContactList';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container-fluid mt-3">
        <ContactList />
      </div>
    );
  }
}

export default AppComponent;
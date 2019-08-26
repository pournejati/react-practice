import React from 'react';
import Contacts from '../ContactsComponent/ContactsComponent';

class AppComponent extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Smith"
      },
      {
        id: 2,
        name: "Mary Watson"
      },
      {
        id: 3
      }
    ],
  };
 

  render() {
    const returnContacts = () => (<Contacts model={this.state.contacts} />);

    return (
      <div className="container-fluid mt-2">
        {returnContacts()}
      </div>
    );
  }
}

export default AppComponent;
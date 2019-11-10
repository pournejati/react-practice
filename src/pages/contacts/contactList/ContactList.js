import React from 'react';


class ContactList extends React.Component {
    render() {
        return this.props.contacts
            ? this.props.contacts.map(contact =>
                <h5 key={contact.id} title={contact.id}>{contact.name}</h5>
            ) : null;
    }
}


export default ContactList;
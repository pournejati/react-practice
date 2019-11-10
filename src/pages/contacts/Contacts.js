import React from 'react';
import uuid from 'uuid/v4';
import ContactsTable from './contactsTable/ContactsTable';
import ContactsList from './contactList/ContactList';

import AddButton from './addButton/AddButton';

class ContactsPage extends React.Component {
    state = {
        contacts: [
            {
                id: uuid(),
                name: "John Smith"
            },
            {
                id: uuid(),
                name: "Mary Watson"
            }
        ]
    };

    onItemAdded = () => {
        const newItem = {
            id: uuid(),
            name: `New Contact`
        };
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newItem]
        }));
    };

    onItemUpdated = (contact) => {
        const contacts = [...this.state.contacts];
        const currentContact = contacts.filter(x => x.id === contact.id);
        contacts[contacts.indexOf(currentContact)] = contact;
        this.setState({
            contacts: contacts
        });
    }

    onItemRemoved = (contact) => {
        const contacts = [...this.state.contacts];
        contacts.splice(contacts.indexOf(contact), 1);
        this.setState({
            contacts: contacts
        });
    };

    render() {
        const contacts = this.state.contacts;
        return (
            <>
                <AddButton onItemAdded={this.onItemAdded} />
                <ContactsTable contacts={this.state.contacts} onItemUpdated={this.onItemUpdated} onItemRemoved={this.onItemRemoved} />
                <h5 className="mt-2">Total Items: {contacts ? contacts.length : 0}</h5>
                <hr />
                <ContactsList contacts={this.state.contacts} />
            </>
        );
    }
}

export default ContactsPage;
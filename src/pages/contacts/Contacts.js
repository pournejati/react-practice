import React, { useState } from 'react';
import uuid from 'uuid/v4';
import ContactsTable from './contactsTable/ContactsTable';
import ContactsList from './contactList/ContactList';
import AddButton from './addButton/AddButton';

import contactList from '../../services/Data'

function ContactsPage() {
    const [contacts, setContacts] = useState(contactList); 
    
    const onItemAdded = () => {
        const newItem = {
            id: uuid(),
            name: `New Contact`
        };
        setContacts([...contacts, newItem]);
    };

    const onItemUpdated = (contact) => {
        setContacts([...contacts]);
    }

    const onItemRemoved = (contact) => {
        contacts.splice(contacts.indexOf(contact), 1);
        setContacts([...contacts]);
    };

    return (
        <>
            <AddButton onItemAdded={onItemAdded} />
            <ContactsTable contacts={contacts} onItemUpdated={onItemUpdated} onItemRemoved={onItemRemoved} />
            <h5 className="mt-2">Total Items: {contacts ? contacts.length : 0}</h5>
            <hr />
            <ContactsList contacts={contacts} />
        </>
    );
}

export default ContactsPage;
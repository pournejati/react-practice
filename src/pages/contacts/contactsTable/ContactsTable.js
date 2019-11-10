import React from 'react';
import ContactRow from '../contactRow/ContactRow';

const ContactsTable = (props) => {
    const renderTableHeading = () => {
        return (
            <div className="row">
                <div className="col" style={{ maxWidth: "400px" }}>
                    <strong>Id</strong>
                </div>
                <div className="col">
                    <strong>Name</strong>
                </div>
                <div className="col" style={{ maxWidth: "100px" }}></div>
            </div>
        );
    }

    return <>
        {renderTableHeading()}
        {props.contacts && props.contacts.map(contact =>
            <ContactRow key={contact.id}
                model={contact}
                onItemUpdated={props.onItemUpdated}
                onItemRemoved={props.onItemRemoved} />
        )}
    </>;
}

export default ContactsTable;
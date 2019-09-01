import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Contact from '../ContactComponent/ContactComponent';

class Contacts extends React.Component {
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
        ]
    };

    getNewContactId = () => Math.max(...this.state.contacts.map(contact => contact.id)) + 1;

    onItemAdded = () => {
        const newItem = {
            id: this.getNewContactId(),
            name: `Contact ${this.getNewContactId()}`
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
        const anyContactExists = contacts.length > 0;

        const renderAddContactButton = () => (
            <button className="btn btn-primary btn-sm mb-2" onClick={this.onItemAdded}>
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                <span>New Contact</span>
            </button>
        );

        const renderTableHeading = () => {
            return (
                <div className="row">
                    <div className="col" style={{ maxWidth: "100px" }}>Id</div>
                    <div className="col">Name</div>
                    <div className="col" style={{ maxWidth: "100px" }}></div>
                </div>
            );
        }

        const renderRows = () => contacts.map(contact =>
            <Contact key={contact.id}
                model={contact}
                onItemUpdated={this.onItemUpdated}
                onItemRemoved={this.onItemRemoved} />);

        const renderTotalRecordsContainer = () => (<h5 className="mt-2">Total Items: {contacts.length}</h5>);

        const renderUndefinedModel = () => (<span className="text text-danger">Model is undefined!</span>);

        const renderTrace = () => contacts.map(contact => <h5 key={contact.id}>{contact.id} - {contact.name}</h5>);

        return (
            <>
                {renderAddContactButton()}
                {contacts && anyContactExists && renderTableHeading()}
                {contacts && anyContactExists && renderRows()}
                {contacts && renderTotalRecordsContainer()}
                {!contacts && renderUndefinedModel()}
                <hr />
                {contacts && renderTrace()}
            </>
        );
    }
}

export default Contacts;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Contact from '../ContactComponent/ContactComponent';

class Contacts extends React.Component {
    state = {
        contacts: this.props.model
    };
    getNewContactId = () => this.state.contacts.length + 1;
    onAddingItem = () => {
        const newItem = {
            id: this.getNewContactId(),
            name: `Contact ${this.getNewContactId()}`
        };
        this.setState(prevState => ({
            contacts: [...prevState.contacts, newItem]
        }));
    };

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

        const renderAddButton = () => {
            return (
                <button className="btn btn-primary btn-sm mb-2" onClick={this.onAddingItem}>
                    <FontAwesomeIcon icon={faPlus} className="mr-1" />
                    <span>New Contact</span>
                </button>
            );
        }
        const renderTableHeading = () => {
            return (
                <div className="row">
                    <div className="col" style={{ maxWidth: "100px" }}>Id</div>
                    <div className="col">Name</div>
                    <div className="col" style={{ maxWidth: "100px" }}></div>
                </div>
            );
        }
        const renderTotalRecords = () => (<h5>Total Items: {contacts.length}</h5>);
        const renderRows = () => contacts.map((contact, index) => <Contact key={index} model={contact} onItemRemoved={this.onItemRemoved} />);

        let viewModel = [];
        viewModel.push(renderAddButton());
        if (contacts) {
            if (anyContactExists) {
                viewModel.push(renderTableHeading());
                viewModel.push(renderRows());
            }
            viewModel.push(renderTotalRecords());
        }
        else {
            viewModel.push(<span className="text text-danger">Model is undefined!</span>);
        }

        return viewModel;
    }
}

export default Contacts;
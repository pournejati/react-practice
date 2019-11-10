import React from 'react';
import ContactRow from '../contactRow/ContactRow';

class ContactsTable extends React.Component {
    renderTableHeading = () => {
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

    render() {
        return <>
            {this.renderTableHeading()}
            {this.props.contacts.map(contact =>
                <ContactRow key={contact.id}
                    model={contact}
                    onItemUpdated={this.props.onItemUpdated}
                    onItemRemoved={this.props.onItemRemoved} />
            )}
        </>;
    }
}

export default ContactsTable;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
  state = {
    contact: this.props.model,
    editMode: false
  };

  onEditClicked = () => this.setState({
    editMode: !this.state.editMode
  });

  onNameChanged = (event) => {
    const contact = { ...this.state.contact };
    contact.name = event.target.value;
    this.setState({
      contact: contact
    });
  };
  onFormSubmitted = (event) => {
    event.preventDefault();
    this.onEditClicked();
  }
  onRemoveClicked = () => this.props.onItemRemoved(this.state.contact);

  renderContact = (contact) => (
    <div className="row">
      <div className="col" style={{ maxWidth: "100px" }}>{contact.id}</div>
      <div className="col">
        {!this.state.editMode && <span>{contact.name}</span>}
        <form onSubmit={this.onFormSubmitted} className={this.state.editMode ? "" : "hidden"} >
          <input name="name" className="form-control form-control-sm" value={contact.name} onChange={this.onNameChanged} />
        </form>
      </div>
      <div className="col" style={{ maxWidth: "100px" }}>
        <button type="button" className="btn btn-link btn-sm mr-1" onClick={this.onEditClicked}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button type="button" className="btn btn-link text-danger btn-sm" onClick={this.onRemoveClicked}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );

  render() {
    return this.state.contact
      ? this.renderContact(this.state.contact)
      : (<div className="text text-danger">Nothing!</div>);
  }
}

class ContactList extends React.Component {
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

    let viewModel = [];
    viewModel.push(renderAddButton());
    if (contacts) {
      if (anyContactExists) {
        viewModel.push(renderTableHeading());
        viewModel.push(contacts.map(contact => <Contact key={contact.id} model={contact} onItemRemoved={this.onItemRemoved} />));
      }
      viewModel.push(renderTotalRecords());
    }
    else {
      viewModel.push(<span className="text text-danger">Model is undefined!</span>);
    }

    return viewModel;
  }
}

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
    return (<div className="container-fluid mt-2">
      <ContactList key="Contacts" model={this.state.contacts} />
    </div>);
  }
}


export default AppComponent;

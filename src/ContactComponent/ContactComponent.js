import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

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

  export default Contact;
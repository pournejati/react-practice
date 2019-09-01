import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {
    state = {
        editMode: false
    };

    onEditButtonClicked = () => this.setState({
        editMode: !this.state.editMode
    });

    onItemUpdated = (event) => {
        const { model } = this.props;
        model.name = event.target.value;
        this.props.onItemUpdated(model);
    };

    onRemoveClicked = () => this.props.onItemRemoved(this.props.model);

    renderContact = (contact) => (
        <div className="row">
            <div className="col" style={{ maxWidth: "100px" }}>{contact.id}</div>
            <div className="col">
                {this.state.editMode
                    ? <input type="text" name="name" className="form-control form-control-sm" value={contact.name} onChange={this.onItemUpdated} />
                    : <span>{contact.name}</span>
                }
            </div>
            <div className="col" style={{ maxWidth: "100px" }}>
                <button type="button" className="btn btn-link btn-sm mr-1" onClick={this.onEditButtonClicked}>
                    <FontAwesomeIcon icon={this.state.editMode ? faSave : faPencilAlt} />
                </button>
                <button type="button" className="btn btn-link text-danger btn-sm" onClick={this.onRemoveClicked}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );

    render() {
        return this.renderContact(this.props.model);
    }
}

export default Contact;
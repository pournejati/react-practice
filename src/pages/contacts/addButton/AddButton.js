import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddButton extends React.Component {
    render() {
        return (
            <button className="btn btn-primary btn-sm mb-2" onClick={this.props.onItemAdded}>
                <FontAwesomeIcon icon={faPlus} className="mr-1" />
                <span>Add Contact</span>
            </button>
        )
    }
}

export default AddButton;
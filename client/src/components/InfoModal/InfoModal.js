import React from "react";
import Modal from '@material-ui/core/Modal';

export class InfoModal extends React.Component {
    render() {
    if(!this.props.show) {
        return null;
    }
    return (
    <Modal></Modal>
    )
    }
};